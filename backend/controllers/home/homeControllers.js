const categoryModel = require('../../models/categoryModel')
const { responseReturn } = require("../../utilities/response")

class homeControllers{
    get_category = async(req, res) => {
        try {
            const categories = await categoryModel.find({})
            responseReturn(res, 200, {
                categories
            })
        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = new homeControllers()