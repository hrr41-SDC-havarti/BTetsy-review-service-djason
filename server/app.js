const newrelic = require('newrelic');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 5000;
const db = require('./../db');

app.options('*', cors()); // include before other routes
app.use(cors());

const {
  getCommentReviewPostgres, insertCommentReviewPostgres,
  deleteCommentReviewPostgres, updateCommentReviewPostgres } = require('./../db/postgresdb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

//handle request for a certain seller
app.get('/api/comment/:sellerID', (req, res) => {

  getCommentReviewPostgres(req.params.sellerID, (err, results) => {
    if (err) {
      console.log('error occured getting seller info', err);
      res.status(404).send('Error occured getting seller info');
    }

    res.status(200).send(results);

  });
});

app.post('/api/comment/:sellerID', (req, res) => {
  insertCommentReviewPostgres(req.params.sellerID, req.body.name, req.body.avatar, req.body.comment, req.body.photocomment, req.body.item, req.body.itemphoto, req.body.rating, (err, results) => {
    if (err) {
      res.status(404).json({
        'option': 'error',
        'result': err
      });
    }
    res.status(201).json({
      'option': 'post',
      'result': results
    });
  });
})

app.put('/api/comment/:ID', (req, res) => {
  updateCommentReviewPostgres(req.params.ID, req.body.comment, req.body.ratings, (err, results) => {
    if (err) {
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

app.delete('/api/comment/:ID', (req, res) => {
  deleteCommentReviewPostgres(req.params.ID, (err, results) => {
    if (err) {
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