require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

// add your endpoints here
app.get("/", (_, response) => response.json("Root route for translatim."));

// Last line of code
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
