import express from 'express'
import authMiddleware from "../midddleware/auth.js"
import { listOrders, placeOrder, upadateStatus, userOrders, verifyOrder } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorder",authMiddleware, userOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status", upadateStatus)

export default orderRouter;        