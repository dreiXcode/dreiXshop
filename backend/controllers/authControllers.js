const adminModel = require('../models/adminModel')
const sellerModel = require('../models/sellerModel')
const sellerCustomerModel = require('../models/chat/sellerCustomerModel')
const { responseReturn } = require('../utilities/response')
const bcrypt = require('bcrypt')
const { createToken } = require('../utilities/tokenCreate')

class authControllers{
    
    admin_login = async(req, res) => {
        const{email,password} = req.body
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            //console.log(admin)
            if (admin) {
                const match = await bcrypt.compare(password, admin.password)
                console.log(match)
                if (match) {
                    const token = await createToken({
                        id : admin.id,
                        role : admin.role
                    })  
                    res.cookie('accessToken', token,{
                        expires : new Date(Date.now() + 7*24*60*60*1000)
                    })
                    //responseReturn(res, 200, {token, message: "Login Success"})
                    responseReturn(res, 200, {token, message: "Login Success"}) 
                    

                } else {
                    responseReturn(res, 404, {error: "Incorrect password"})   
                }
                //console.log("Login Success response sent");

            } else {
                responseReturn(res, 404, {error: "Email not found"})   
            }

        } catch (error) {
            responseReturn(res, 500, {error: error.message})
        }
    }
    // End Method

    seller_login = async(req, res) => {
        const{email,password} = req.body
        try {
            const seller = await sellerModel.findOne({email}).select('+password')
            //console.log(admin)
            if (seller) {
                const match = await bcrypt.compare(password, seller.password)
                console.log(match)
                if (match) {
                    const token = await createToken({
                        id : seller.id,
                        role : seller.role
                    })  
                    res.cookie('accessToken', token,{
                        expires : new Date(Date.now() + 7*24*60*60*1000)
                    })
                    //responseReturn(res, 200, {token, message: "Login Success"})
                    responseReturn(res, 200, {token, message: "Login Success"}) 
                    

                } else {
                    responseReturn(res, 404, {error: "Incorrect password"})   
                }
                //console.log("Login Success response sent");

            } else {
                responseReturn(res, 404, {error: "Email not found"})   
            }

        } catch (error) {
            responseReturn(res, 500, {error: error.message})
        }
    }
    // End Method

    seller_register = async(req, res) => {
        const {email, name, password} = req.body
        try {
            const getUser = await sellerModel.findOne({email})
            if (getUser) {
                responseReturn(res, 404, {error: 'Email already exist'})
            }else{
                const seller = await sellerModel.create({
                    name,
                    email,
                    password: await bcrypt.hash(password, 10),
                    method: 'manually', 
                    shopInfo: {}
                })
                //console.log(seller)
                await sellerCustomerModel.create({
                    myId: seller.id
                })

                const token = await createToken({
                    id : seller.id, 
                    role: seller.role
                })
                res.cookie('accessToken',token,{
                    expires : new Date(Date.now() + 7*24*60*60*1000)
                })

                responseReturn(res, 201, {token, message: 'Register Success'})
            }
        } catch (error) {
            responseReturn(res, 500, {error: 'Internal Server Error'})
        }
    }
    // End Method

    getUser = async(req, res) =>    {
        const {id, role} = req;

        try {
            if (role === 'admin') {
                const user = await adminModel.findById(id)
                responseReturn(res, 200, {userInfo : user})
            } else {
                const seller = await sellerModel.findById(id)
                responseReturn(res, 200, {userInfo : seller})
            }
        } catch (error) {
            responseReturn(res, 500, {error: 'Internal Server Error'})
        }

    } // end getUser Method

}

class categoryController{

}

module.exports = new authControllers()