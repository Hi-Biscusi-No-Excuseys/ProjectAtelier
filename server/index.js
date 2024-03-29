require('dotenv').config();
const cors = require('cors');
const path = require('path');

const compression = require('compression');
const express = require('express');
const morgan = require('morgan');

const overview = require('./overview');

const questionsanswers = require('./questionsanswers');

const ratingsreviews = require('./ratingsreviews');

const relateditems = require('./relateditems');

const app = express();
app.use(morgan('dev'));
app.use(cors({ origin: 'http://13.57.236.58:3000' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/overview', overview);
app.use('/questionsanswers', cors(), questionsanswers);
app.use('/reviews', ratingsreviews);
app.use('/relateditems', relateditems);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
