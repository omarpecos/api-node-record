const setDatetime = (req,res,next) => {
  const date = new Date();
  req.datetime = date.toISOString();
  console.log('La fecha de la req >>>', req.datetime)
  next();
}

module.exports = {setDatetime}