const fs = require('fs');
const csv = require('fast-csv');
const Promise = require('promise');
const {userNames, randomAvatars, items, randomPhoto, randomComment, photoInComment} = require('./../fakeData/fakeData.js');

//for randomReviewItem and photoInComment
let counter = 0;

// random name generator
let getRandomNames = () => {
  return userNames[Math.floor(Math.random() * userNames.length)];
};

//random number of total reviews
let getRandomReviews = () => {
  return Math.floor(Math.random() * 3001);
};

//random number of average reviews, may change later to decimals
let getRandomRatings = () => {
  return Math.floor(Math.random() * 5 + 1);
};

// random photos for a profile picture
let getRandomAvatar = () => {
  return randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
};

// random comment/ review
let getRandomComment = () => {
  return randomComment[Math.floor(Math.random() * randomComment.length)];
};

//When the comment contains a photo
let getRandomPhotoInComment = () => {

  //when the item is the dog collar
  if (counter === 3) {
    return photoInComment[0];
  }
  //when the item is kayne's poster
  if (counter === 7) {
    return photoInComment[1];
  }
  if (counter === 8) {
    return photoInComment[2];
  }

  return 'none';
};

//random items they reviewed
let getRandomReviewerItem = () => {
  return items[counter];
};

//random photos of the item they reviewed
let getRandomItemPhoto = () => {
  return randomPhoto[counter];
};

//gets a random date
let getRandomDate = () => {
  var start = new Date(2017, 0, 1);
  var end = new Date();
  var randDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  var day = randDate.getDate();
  var month = randDate.getMonth() + 1;
  var year = randDate.getFullYear();
  return `${year}-${month}-${day}`
};
//100 100000
let sellerGenerator = () => {
  const writeSellerStream = fs.createWriteStream("sellerdata.csv")
  const csvSellerStream = csv.format({ headers: [ 'seller' ] });
  csvSellerStream.pipe(writeSellerStream).on('end', process.exit);

  let seeds = 1
  for (let i = 0; i < 100; i++) {
    var t=0;
    while(t<=100000){
      csvSellerStream.write([ getRandomNames() ]);
      seeds ++;
      t++;
    }
  }
  return seeds;
}
//100 100001
let commentGenerator = () => {
  const writeCommentStream = fs.createWriteStream("commentdata.csv")
  const csvCommentStream = csv.format({ headers: [ 'comment' ] });
  csvCommentStream.pipe(writeCommentStream).on('end', process.exit);

  let seeds = 1;
  for (let i = 0; i < 100; i++) {
    var id=1;
    while(id<100001){
      csvSellerStream.write(
        [getRandomNames(),
        getRandomAvatar(),
        getRandomComment(),
        getRandomPhotoInComment(),
        getRandomReviewerItem(),
        getRandomItemPhoto(),
        getRandomRatings(),
        id,
        getRandomDate()
      ]);
      seeds ++;
      id++;
    }
  }
  return seeds;
}

const promise = new Promise((resolve, reject)=>{
    var seller = sellerGenerator();
    if(seller.length){
      resolve(seller);
    }else{
      reject(seller);
    }
})

promise.then((seller)=>{
    var comment = commentGenerator()
    return {seller, comment};
}).then(({seller, comment})=>{
  console.log(`SELLER COUNT:> ${seller} \n COMMENT COUNT:>${comment}`)
}).catch(()=>{
  console.log('error to promisify');
});

/*
fs.writeFileSync('data.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
*/
/*
IN YOUR PROJECT ROOT:
export NODE_OPTIONS=--max_old_space_size=4096
node postgres.js --max-old-space-size
*/