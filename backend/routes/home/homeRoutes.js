const homeControllers = require('../../controllers/home/homeControllers')
const router  = require('express').Router()

router.get('/get-categories', homeControllers.get_category)

module.exports = router