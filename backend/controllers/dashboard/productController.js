const formidable = require("formidable")
const { responseReturn } = require("../../utilities/response")
const cloudinary = require('cloudinary').v2
const productModel = requirer('../../models/productModel.js')

class productController{

    add_product = async(req, res) => {
        const form = formidable({ multiples: true })

        form.parse(req, async(err, field, files) => {
            //console.log(files.images[0])
            //console.log(field)

            let{name, category, description, stock, price, discount, shopName, brand} = field;
            const {images} = files;
            name = name.trim()
            const slug = name.split(' ').join('-')
            
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret, 
                secure: true
            })

            try {
                let allImageUrl = [];
                for (let i = 0; i < images.length; i++) {
                    const result = await cloudinary.uploader.upload(images[i].filepath, {folder: 'products'});              
                    allImageUrl=[...allImageUrl, result.url]      
                }

                await productModel.create({
                    
                })

            } catch (error) {
                
            }
        })
    }
} // End Method


module.exports = new productController()