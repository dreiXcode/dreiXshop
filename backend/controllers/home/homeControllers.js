const categoryModel = require('../../models/categoryModel')
const productModel = require('../../models/productModel')
const { responseReturn } = require("../../utilities/response")

class homeControllers{

    fortmattedProduct = () => {

    }

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

}// End Method

get_products = async(req, res) => {
    try {
        const products = await productModel.find({}).limit(12).sort({
            createAt: -1
        })
        const allProducts1 = await productModel.find({}).limit(9).sort({
            createAt: -1
        })
        const latest_product = this.fortmattedProduct(allProduct1)
        const allProducts2 = await productModel.find({}).limit(9).sort({
            rating: -1
        })
        const topRated_product = this.fortmattedProduct(allProduct2)
        const allProducts3 = await productModel.find({}).limit(9).sort({
            discount: -1
        })
        const discount_product = this.fortmattedProduct(allProduct3)

        responseReturn(res, 200, {
            products, 
            latest_product,
            topRated_product,
            discount_product
        })
    } catch (error) {
        console.log(error.message)
        
    }
}// End Method

module.exports = new homeControllers()