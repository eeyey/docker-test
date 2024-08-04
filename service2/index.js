const axios = require("axios");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Service 2! asdsadsa");
});

app.get("/service1", async (req, res) => {
  try {
    const response = await axios.get("http://service1:5000/");
    res.send(`Response from Service 1: ${response.data}`);
  } catch (error) {
    res.status(500).send("Error connecting to Service 1 " + error.message);
  }
});

const start = async () => {
  try {
    app.listen(5001, () => console.log("Server started"));
  } catch (e) {
    console.log(e);
  }
};

start();
