const {Pool, Client} = require('pg');
const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');
const Promise = require('promise');
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

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sellersdb',
  password: 'password',
  port: 5432
});
client.connect();

const promise = new Promise((resolve, reject) => {
  console.log('SELLER START -> ',new Date());
  const fileSeller = path.join(__dirname, '../generator','sellerdata.csv');
  var count = 0;
  var dataGroup = []
  csv.parseFile(fileSeller, {headers: true, start: 1, end: 1})
  .on('data', (data) =>{
    if(count == 100){
      //setTimeout(addDataPostgre, 500, dataGroup);
      var promise = new Promise((resolv, reject)=>{
        addDataPostgre(dataGroup, ()=>{
          resolv('ok');
        });
        reject('not ok')
      })

      promise.then(()=>{
        dataGroup = [];
        dataGroup.push(data);
        count = 1;
      }).catch((err)=>{
          console.log('error->', err)
      })
    }else{
      dataGroup.push(data);
      count ++;
    }
  })
  .on('error', (err) => {
    console.log('error->', err);
    reject(err)
  })
  .on('end', (end) => {
    if(count > 0){
      resolve(count, end)
    }else{
      reject('error getting data from your csv file');
    }
  })
})

let addDataPostgre = (data, callback) => {

  data.forEach((item)=>{
    client.query('INSERT INTO seller_info(seller_name) VALUES ($1)', [item.seller_name], (err, res) => {
      if(err){
        console.log('**********->', err);
      }
      //console.log('##########->', res.rowCount);
    })
    console.log('\n : SELLER TIME -> ',new Date());
  })

  callback(1);
}

return promise.then((count, end)=>{
  console.log('count->', count, ' end->', end);
}).catch((error)=>{
  console.log(error);
});


let getAllPostgres = () => {
  client.query('SELECT * FROM seller_info',  (err, result) => {
    release();
    if (err) {
      return `Error  executing query, ${err.stack}`;
    }
    console.log(result.rows);
  });
}

//,getAllPostgres
module.exports = {
  addDataPostgre,
  getAllPostgres
};
