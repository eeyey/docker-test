const axios = require("axios");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Service 1! asdsa a");
});

app.get("/service2", async (req, res) => {
  try {
    const response = await axios.get("http://service2:5001/");
    res.send(`Response from Service 2: ${response.data}`);
  } catch (error) {
    res.status(500).send("Error connecting to Service 2 " + error.message);
  }
});

const start = async () => {
  try {
    app.listen(5000, () => console.log("Server started"));
  } catch (e) {
    console.log(e);
  }
};

start();
