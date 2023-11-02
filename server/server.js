require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

// Your endpoints go here
app.get("/", (_, response) => response.json("Root route for translatim."));

app.get("/translate", async (request, response) => {
  // We want to get the request: Word, To, From
  // (Word to translate, language to translate from, and language to translate to)
  // This is best way to get variables for each query (we are destructuring)
  const { word, from, to } = request.query;
  const API = `https://api.mymemory.translated.net/get?q=${word}&langpair=${from}|${to}`;
  const res = await axios.get(API);

  const wrangledData = {
    translation: res.data.responseData.translatedText,
    match: res.data.responseData.match,
  };

  response.json(wrangledData);
});

// Last line of code
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
