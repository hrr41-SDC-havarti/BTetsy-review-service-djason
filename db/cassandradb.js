const cassandra = require('cassandra-driver');
const fs = require('fs');
const Promise = require('promise');
const path = require('path');
const csv = require('fast-csv');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1', 'localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'sellersdb'
});

const queryInsertSeller = 'INSERT INTO seller_info (id_seller, seller_name) values (?, ?)';

const queryInsertCom = 'INSERT INTO seller_info (id_comment, reviewer_name, reviewer_avatar, reviewer_comment, reviewer_photocomment, reviewer_item, reviewer_rating, sellerID, created_date) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';
// client.execute(query).then( (result) => {
//   console.log('data result->', result.row);
// });

id_comment int PRIMARY KEY,
created_date date,
reviewer_avatar text,
reviewer_comment text,
reviewer_item text,
reviewer_name text,
reviewer_photocomment text,
reviewer_rating double,
sellerid int

COPY comment_review (id_comment, reviewer_name, reviewer_avatar, reviewer_comment, reviewer_photocomment, reviewer_item, reviewer_rating, sellerID, created_date) FROM '/Users/ingdjason/Documents/HACKREACTOR/18WEEKS/hrr41-junior/hrr41-sdc-havarti/BTetsy-review-service-djason/generator/commentdata.csv' WITH HEADER = TRUE;

let addDataPostgre = (callback) => {
  const fileSeller = path.join(__dirname, '../generator','sellercadata.csv');

  const fileStream = fs.createReadStream(fileSeller);
  let countValue = 0;
  fileStream.pipe(csv.parse({headers: true}))
  .on('data', (row) => {
    client.execute(queryInsertSeller, [row.id_seller, row.seller_name], {prepare: true})
    .then( (result) => {
      countValue++;
    })
    .catch((error)=>{
      console.log('error->', error);
    });
  })
  .on('error', (error) => {
    console.log('error streaming file->', error);
  })
  .on('end', (count) => {
    console.log('count row csv file->', count);
  })
}


addDataPostgre();