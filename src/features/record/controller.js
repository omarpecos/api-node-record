const Record = require('../../models/record')


const getAll = async (_req, res) => {
  try {
     const allRecords = await Record.find();
     return res.status(200).json(allRecords)
  } catch (error) {
    res.status(500).json({message: 'Server error', error: error.message})
  }
 
}

const getAllToday = async (req, res) => {
  try {
    const {datetime} = req;
    const date = new Date(datetime);
    date.setHours(0,0,0);
  
    const allRecordsToday = await Record.find({
      recorded: {$gt: date}
    });
  
    return res.status(200).json(allRecordsToday)
  } catch (error) {
    res.status(500).json({message: 'Server error', error: error.message})
  }
}

const create = async (req, res) => {
  try {
    const {body, datetime} = req;

  const record = new Record({...body, recorded: datetime});
  await record.save();

 return  res.status(201).json({message: 'Record created', date: record.recorded})
  } catch (error) {
     res.status(500).json({message: 'Server error', error: error.message})
  }
}

/*  // TODO - only for debug
const deleteAll = async (req, res) => {
  try {
    await Record.deleteMany()
    return  res.status(200).json({message: 'All Records deleted', date: req.datetime})
  } catch (error) {
     res.status(500).json({message: 'Server error', error: error.message})
  }
} */

module.exports = {
  getAll,
  getAllToday,
  create,
/*   // TODO - only for debug
  deleteAll */
}