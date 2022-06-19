const express = require('express');
const cors = require('cors');

const recordRoutes = require('./features/record/routes');
const middleware = require('./features/record/middleware');

const app = express();

app.use(cors());
app.use(express.json());

// router
app.use('/api/records', middleware.setDatetime, recordRoutes);

// info endpoint
app.use('/', (_req, res) => {
  res.json({
    message: 'Api is running!',
    date: new Date().toISOString(),
  });
});

module.exports = app;
