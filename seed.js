const Seller = require('./db/index.js').Seller;
const userNames = require('./fakeData/fakeData.js').userNames;
const randomAvatars = require('./fakeData/fakeData.js').randomAvatars;
const items = require('./fakeData/fakeData.js').items;
const randomPhoto = require('./fakeData/fakeData.js').randomPhoto;
const randomComment = require('./fakeData/fakeData.js').randomComment;
const photoInComment = require('./fakeData/fakeData.js').photoInComment;

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
  let months = [
    'Jan',
    'Feb',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];


  let randomMonth = months[Math.floor(Math.random() * months.length)];

  let randomDay = Math.floor(Math.random() * 31);

  let randomYear = Math.floor(Math.random() * 2) + 2017;

  return `${randomMonth} ${randomDay}, ${randomYear}`;
};


//creates all the 25 comments into an array
let getComments = () => {
  let comments = [];


  for (let i = 0; i < 25; i++) {
    let currentComment = {
      id: i,
      reviewerName: getRandomNames(),
      reviewerAvatar: getRandomAvatar(),
      reviewerComment: getRandomComment(),
      reviewerPhotoInComment: getRandomPhotoInComment(),
      reviewerItem: getRandomReviewerItem(),
      reviewerItemPhoto: getRandomItemPhoto(),
      rating: getRandomRatings(),
      reviewerDate: getRandomDate()
    };
    counter++;
    comments.push(currentComment);

  }


  //return an array of 25
  return comments;
};



//creating each object for the collection
let seeds = [];
for (let i = 0; i < 100; i++) {
  let seedSeller = {
    sellerID: i,
    seller: getRandomNames(),
    reviews: getRandomReviews(),
    ratings: getRandomRatings(),
    comments: getComments()
  };


  //reset counter
  counter = 0;
  seeds.push(seedSeller);
}


Seller.collection.insert(seeds, (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log(result);
});
