const express = require('express');
const	app = express();
require('dotenv').config();

app.all('/', (req, res) => {
      res.status(200).send("<p>asdgfasgafds"+process.env.TEST+"</p>");
});

app.listen(8080);