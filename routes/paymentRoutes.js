import express from 'express'
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from '../controllers/paymentController.js'
import { isAuthenticated } from '../middleware/Auth.js'

const router= express.Router()

// buy subs
router.route('/subscribe').get(isAuthenticated,buySubscription)

router.route('/paymentverification').post(isAuthenticated,paymentVerification )

//get razorpay key
router.route('/razorpaykey').get(getRazorPayKey )

//cancel subsc

router.route('/subscribe/cancel').delete(isAuthenticated,cancelSubscription)


export default router
