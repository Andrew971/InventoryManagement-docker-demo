import { Router } from 'express'
import InventoryRoute from './inventory.route'
import OrderRoute from './order.route'

// Init router and path
const router = Router()

// Add sub-routes
router.use('/inventory', InventoryRoute)
router.use('/order', OrderRoute)

// Export the base-router
export default router
