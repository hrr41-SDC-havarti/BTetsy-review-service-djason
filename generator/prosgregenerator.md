# Data generation script

### Node package
  - fs [![File System]](https://nodejs.org/api/fs.html)
  - fast-csv [[fast-csv Documentation]](https://github.com/C2FO/fast-csv/blob/HEAD/docs/formatting.md#csv-write-to-stream)
  - promise [![npm promise]](https://www.npmjs.com/package/promise)

```sh
HELPER : 4Gb (4056Mb) Max for adding 10M records
```
- Increase node limit in your terminal using :  `export NODE_OPTIONS=--max_old_space_size=4096`

Generate csv file for seller_info & comment_review table

- Using node: `node generator/csvdatagenerator.js --max-old-space-size`

- Using npm: `npm run csvdata`

[![N|Solid](https://cosmic-s3.imgix.net/7171a4d0-27b0-11e7-b6ae-8108cf4caa96-nodejs.svg?w=500&auto=compress,format)](https://nodejs.org/en/)