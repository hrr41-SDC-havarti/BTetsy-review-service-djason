const axios = require('axios');


describe('API Routes', () => {
  test('A get request to /api/seller/:sellerID to get a seller', async () => {
    try {
      var response = await axios.get('http://localhost:5000/api/seller/5da6350a92b86a1332313b4c');
    } catch (err) {
      console.error(err);
    }
    expect(response.status).toBe(200);
    expect(response.data.seller).toBe("JadenPink");
    expect(response.data.ratings).toBe(5);
    expect(response.data.reviews).toBe(2335);
    expect(response.data.comments.length).toBe(25);
  });
});





