const formidable = require("formidable")
const { responseReturn } = require("../../utilities/response")
const cloudinary = require('cloudinary').v2
const categoryModel = require('../../models/categoryModel')


class sellerController{
    
    request_seller_get = async (req, res) => {
        console.log(req.query)
    }

}

module.exports = new sellerController()