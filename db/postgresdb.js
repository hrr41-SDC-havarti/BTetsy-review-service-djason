const { Pool, Client } = require('pg');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;
// const csv = require('fast-csv');
const Promise = require('promise');
const path = require('path');
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
})
client.connect()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

let addDataPostgre = (callback) => {
  pool.connect( (err, client, done) => {
    const fileSeller = path.join(__dirname, '../generator','sellerdata.csv');

    const fileStream = fs.createReadStream(fileSeller);
    fileStream.on('error', ()=>{
      client.release();
      done();
    }).on('data', (data) =>{

    });

    const stream = client.query(copyFrom(`COPY seller_info FROM STDIN DELIMITER ',' CSV HEADER`));

    fileStream.pipe(stream).on('finish', ()=>{
      console.log('finish pipe seller');
      done();
      callback();
    }).on('error', (err)=>{
      console.log('error pipe seller->', err);
      done();
    });
  });
}

let addCommDataPostgre = () => {
  pool.connect( (err, client, done) => {
    const fileSeller = path.join(__dirname, '../generator','commentdata.csv');

    const fileStream = fs.createReadStream(fileSeller);
    fileStream.on('error', ()=>{
      client.release();
      done();
    }).on('data', (data) =>{

    });

    const stream = client.query(copyFrom(`COPY comment_review FROM STDIN DELIMITER ',' CSV HEADER`));

    fileStream.pipe(stream).on('finish', ()=>{
      console.log('finish pipe comment');
      done();
    }).on('error', (err)=>{
      console.log('error pipe comment->', err);
      done();
    });
  });
}

//async await
function saveBulkPostgreData(){
  const promise = new Promise((resolv, reject)=>{
    console.log(`***** START RECORD SELLER POSTGRE *****`, new Date().getMilliseconds());
    addDataPostgre(() =>{
      console.log(`##### END RECORD SELLER POSTGRE ####`, new Date().getMilliseconds())
      resolv('ok resolv');
    });
  })

  promise.then( () => {
    console.log(`***** START RECORD COMMENT POSTGRE *****`, new Date().getMilliseconds());
    addCommDataPostgre( () => {
      console.log(`##### END RECORD COMMENT POSTGRE ####`, new Date().getMilliseconds())
    })
  }).catch( () => {
    console.log('error promise');
  })
}
//savePostgreData();

let getCommentReviewPostgres = (sellerID, callback) => {
  const queryStr = 'SELECT * FROM public.comment_review WHERE sellerid = $1 LIMIT 100';
  client.query(queryStr, [sellerID], (err, result) => {
    if (err) {
      callback(`Error  executing query, ${err.stack}`, null);
    }
    callback(null, result.rows);
  });
}

let insertCommentReviewPostgres = (sellerID, name, avatar, comment, photocomment, item, itemphoto, rating, callback) => {
  const queryStr = 'SELECT * FROM public.comment_review WHERE sellerid = $1 LIMIT 100';
  client.query(queryStr, [sellerID], (err, result) => {
    if (err) {
      callback(`Error  executing query, ${err.stack}`, null);
    }
    callback(null, result.rows);
  });
}

let deleteCommentReviewPostgres = (sellerID, callback) => {
  const queryStr = 'DELETE FROM public.comment_review WHERE id_comment = $1';
  client.query(queryStr, [sellerID], (err, result) => {
    if (err) {
      callback(`Error  executing query, ${err.stack}`, null);
    }
    callback(null, result.rows);
  });
}

let updateCommentReviewPostgres = (sellerID, comment, ratings, callback) => {
  const queryStr = 'SELECT * FROM public.comment_review WHERE sellerid = $1 LIMIT 100';
  client.query(queryStr, [sellerID], (err, result) => {
    if (err) {
      callback(`Error  executing query, ${err.stack}`, null);
    }
    callback(null, result.rows);
  });
}

module.exports = {
  saveBulkPostgreData,
  getCommentReviewPostgres,
  insertCommentReviewPostgres,
  deleteCommentReviewPostgres,
  updateCommentReviewPostgres
};
