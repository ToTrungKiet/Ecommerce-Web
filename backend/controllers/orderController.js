import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

// Placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, {CartData: {}})
        res.json({success: true, message: 'Order Placed'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {

}

// Placing orders using RazorPay Method
const placeOrderRazorpay = async (req, res) => {

}

// Placing orders using Admin Panel
const allOrders = async (req, res) => {

}

// User Order Data for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({success: true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Update status from Admin Panel
const updateStatus = async (req, res) => {

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}