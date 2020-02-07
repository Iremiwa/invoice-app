const express = require('express');
const pdf = require('html-pdf');
const cors = require('cors');
const bodyParser = require('body-parser');

const pdfTemplate = require('./documents');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/generatepdf', (req, res) => {

    console.log(req.body);

    pdf.create(pdfTemplate(req.body), {}).toFile('invoice.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
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