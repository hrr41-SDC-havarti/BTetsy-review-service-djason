const { Pool } = require('pg');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;
// const csv = require('fast-csv');
const Promise = require('promise');
const path = require('path');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sellersdb',
  password: 'password',
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
function savePostgreData(){
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

savePostgreData();

let getAllPostgres = () => {
  client.query('SELECT * FROM seller_info',  (err, result) => {
    release();
    if (err) {
      return `Error  executing query, ${err.stack}`;
    }
    console.log(result.rows);
  });
}

module.exports = {
  addDataPostgre,
  addCommDataPostgre,
  getAllPostgres,
  savePostgreData
};
