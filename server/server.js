const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/cpr', require('./routes/cpr.routes'));

app.listen(process.env.PORT, () => {

    console.log(`Server Running On Port ${process.env.PORT}`);

});