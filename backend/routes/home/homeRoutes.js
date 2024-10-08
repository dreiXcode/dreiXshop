const homeControllers = require('../../controllers/home/homeControllers')
const router  = require('express').Router()

router.get('/get-categories', homeControllers.get_category)
router.get('/get-products', homeControllers.get_products)

module.exports = router