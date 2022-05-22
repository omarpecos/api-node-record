const { default: mongoose } = require('mongoose');
const app = require('./src/app');
const { PORT, MONGO_URI } = require('./src/config');

app.listen(PORT, '0.0.0.0', () => {
  console.log('Running server on port ' + PORT);

  mongoose
    .connect(MONGO_URI, {})
    .then(() => {
      console.log('Connected to mongo!');
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});
