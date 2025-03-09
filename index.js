require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require('express-rate-limit');

const showdown = require('showdown');
const converter = new showdown.Converter();
const port = process.env.PORT;

const app = express();

app.use(cors({ origin: "*" }))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

app.get("/", (req, res) => {
    res.send(`Backend is running on ${port}`)
})

app.post("/convert", (req, res) => {

    const { content } = req.body;
    const htmlContent = converter.makeHtml(content);
    res.send(htmlContent).status(200)
})

app.use("*", (req, res) => {
    res.status(404).send({ error: "Endpoint is invalid." })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})