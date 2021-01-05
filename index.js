const express = require("express");

const app = express();
const PORT = 4000;
const path = require("path");
const pdf = require("html-pdf");
const assetPath = path
  .join(__dirname + "/./assets/")
  .replace(new RegExp(/\\/g), "/");

const { html } = require("./html");

pdf
  .create(html({ monitor_report: "1000000000" }), {
    format: "Letter",
    base: "file:///" + assetPath,
    quality: "75",
  })
  .toFile("./test.pdf", (err, res) => {
    if (err) return console.log(err, "ERR");
    console.log(res, "RES");
  });
app.listen(PORT, () => console.log(`Listening on port #${PORT}`));
