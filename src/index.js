// openssl genrsa -out key.pem 2048
// openssl req -new -key key.pem -out csr.epm
// openssl x509 -req -days 365 -in csr.epm -signkey key.pem -out cert.pem

const express = require("express");
const axios = require("axios");
const http = require("http");

// create new express app and save it as "app"
const app = express();

app.all("*", async (req, res) => {
  // const { data } = await axios({
  //   ...req,
  // });

  res.send("adsasdas");
});

app.listen(80);
