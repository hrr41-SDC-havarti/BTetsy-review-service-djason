var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

//this is so jest can use fetch, jest uses node to run which by default does not recognize fetch
global.fetch = require('jest-fetch-mock');

enzyme.configure({ adapter: new Adapter() });


