const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/sellers', { useNewUrlParser: true });


let sellerSchema = mongoose.Schema({
  sellerID: { type: Number, unique: true },
  seller: String,
  reviews: Number,
  ratings: Number,
  comments: Array,
});

let Seller = mongoose.model('Seller', sellerSchema);

/**
 * Get Reviews list by sellerID
 * sellerID: Integer
 */
let getSellerData = (sellerID, callback) => {

  Seller.findOne({ sellerID }, (err, results) => {
    if (err) {
      callback(err, null);
    }

    callback(null, results);
  });

};

/**
 * Record new seller information
 * sellerID: Integer
 * req.body.id, req.body.seller, req.body.reviews, req.body.ratings
 */

let insertSellerData = (sellerID, seller, reviews, ratings, comments, callback) => {

  var sellerObj = { sellerID, seller, reviews, ratings, comments};

  Seller.create(sellerObj, (err, results) => {
    if (err) {
      callback(err, null);
    }else{
      callback(null, results);
    }
  });

};

/**
 * Update function
 * id: ObjectID
 * */
//Model.where({ _id: id }).update({ $set: { title: 'words' }})
let updateSellerData = (id, reviews, ratings, callback) => {
  Seller.where({_id: id}).update({ $set: {reviews, ratings}}, (err, results) => {
    if (err) {
      callback(err, null);
    }

    callback(null, results);
  });
};

/**
 * Delete function
 * id: ObjectID
 *  */
//Model.deleteOne({ name: 'Eddard Stark' }, function (err) {});
let deleteSellerData = (id, callback) => {
  Seller.deleteOne({_id: id}, (err, results) => {
    if (err) {
      callback(err, null);
    }

    callback(null, results);
  });
};

module.exports = {
  Seller,
  getSellerData,
  deleteSellerData,
  updateSellerData,
  insertSellerData
};
