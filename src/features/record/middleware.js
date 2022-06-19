const setDatetime = (req, res, next) => {
  const date = new Date();
  req.datetime = date.toISOString();
  console.log('MDW setDatetime, datetime now() : ', req.datetime);
  next();
};

module.exports = { setDatetime };
