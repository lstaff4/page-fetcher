const request = require('request');
const fs = require('fs');

bytes = 0;
url = process.argv[2];
localFilePath = process.argv[3];

request(url, (error, response, body) => {
  // for (let i = 0; i < body.length; i++) {
  //   bytes += 1;
  // }
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }
  })
});

