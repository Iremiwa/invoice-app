const express = require('express');
const pdf = require('html-pdf');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pdfTemplate = require('./documents');


const app = express();

require("dotenv").config();
const url = process.env.ATLAS_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log("MongoDB database connection established");
    }
  )
  .catch(err => console.log(err));


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/generatepdf', (req, res) => {

    console.log(req.body);

    pdf.create(pdfTemplate(req.body), {}).toFile('invoice.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
            console.log(res.body);
        }
        else {
            res.send(Promise.resolve());
        }
    });
});

app.get('/fetchpdf', (req, res) => {
    res.sendFile(`${__dirname}/invoice.pdf`)
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));