var ubid = require("ubid");

ubid.get(function (error, signatureData) {
  if (error) {
    console.error(error);
    return;
  }

  // dump for example
  console.log(signatureData);
});
