const {Router} = require('express')
const controller = require('./controller')


const router = new Router();

router.get('/', controller.getAll)
router.get('/today', controller.getAllToday)
router.post('/', controller.create)
/* // TODO - only for debug
router.delete('/', controller.deleteAll) */

module.exports = router;