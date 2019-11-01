const express = require('express');
const app = express();
const PORT = 5000;
const db = require('../db');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('./public'));

//handle request for a certain seller
app.get('/api/seller/:sellerID', (req, res) => {

  db.getSellerData(req.params.sellerID, (err, results) => {
    if (err) {
      console.log('error occured getting seller info', err);
      res.status(404).send('Error occured getting seller info');
    }

    res.status(200).send(results);

  });

});
/*
  sellerID: { type: Number, unique: true },
  seller: String,
  reviews: Number,
  ratings: Number,
  comments: Array,
*/
app.post('/api/seller/', (req, res) => {
  db.insertSellerData(req.body.id, req.body.seller, req.body.reviews, req.body.ratings, [], (err, results) => {
    if (err) {
      console.log('error occured add seller info', err);
      res.status(404).json({
        'option': 'error',
        'result': err
      });
    }else{
      res.status(201).json({
        'option': 'post',
        'result': results
      });
    }
  });
})

app.put('/api/seller/:ID', (req, res) => {
  //seller, reviews, ratings, callback
  db.updateSellerData(req.params.ID, req.body.reviews, req.body.ratings, (err, results) => {
    if (err) {
      console.log('error occured update seller info', err);
      res.status(404).json({
        'option': 'update',
        'result': err
      });
    }

    res.status(200).json({
      'option': 'update',
      'result': results
    });
  });
})

app.delete('/api/seller/:ID', (req, res) => {
  db.deleteSellerData(req.params.ID, (err, results) => {
    if (err) {
      console.log('error occured delete seller info', err);
      res.status(404).json({
        'option': 'delete',
        'result': err
      })
    }

    res.status(200).json({
      'option': 'delete',
      'result': results
    })
  });
})


app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});