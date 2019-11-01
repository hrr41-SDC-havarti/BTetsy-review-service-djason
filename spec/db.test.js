const getSellerData = require('../db/index.js').getSellerData;


describe('Get Seller Data', () => {
  test('should retrieve one seller from the database', () => {
    let sellerID = '5da6350a92b86a1332313b4c';

    getSellerData(sellerID, (err, results) => {

      expect(results.seller).toBe('JadenPink');
      expect(results.reviews).toBe(2335);
      expect(results.comments.length).toBe(25);

    });
  });
});