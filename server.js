const express = require('express');
const multer = require('multer');

let app = express();
let upload = multer();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.post('/get-file-size', upload.single('file'), (req, res, next) => {
    if (!req.file) {
        return res.send('You need to give me a file!!');
    }
    res.send({
        size: req.file.size + ' bytes',
        opinion: 'This challenge was kind of pointless.'
    });
});

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});