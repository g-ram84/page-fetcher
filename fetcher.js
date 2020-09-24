const request = require('request');
const fs = require('fs');

const fileUrl = process.argv.slice(2);
const address = fileUrl[0];
const destination = fileUrl[1];

request(address, (error, response, body) => {
  if (error) {
    console.log('failed to make a request');
    process.exit;
  }

  fs.writeFile(destination, body, (err) => {
    if (err) throw err;
    const stats = fs.statSync(destination);
    const fileSizeInBytes = stats["size"];
    console.log("Downloaded and saved " + fileSizeInBytes + "to " + destination);
  });
});
  

  
  // console.log('error:', error);
  // console.log('statusCode:', response && statusCode);
  // console.log('body', body);


