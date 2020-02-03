import { logger } from '../utils'
import { Request, Response, Router, Express } from 'express'
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes'
import OrderControler from '../Controlers/order.controler'

const router = Router();


router.get('/byCustomerEmail', async (req: Request, res: Response) => {
  try {

    // await CreatePet({name: 'kay', owner: 'Bob'})
    return res.status(OK).json('test');
  } catch (err) {
    logger.error(err.message, err)
    return res.status(BAD_REQUEST).json({
        error: err.message
    })
  }
})

router.get('/:orderId', async (req: Request, res: Response) => {
  try {

    // await CreatePet({name: 'kay', owner: 'Bob'})
    return res.status(OK).json('test');
  } catch (err) {
    logger.error(err.message, err)
    return res.status(BAD_REQUEST).json({
        error: err.message
    })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { body } = req

    await OrderControler.PlaceOrder(body)
    return res.status(OK).json('test');
  } catch (err) {
    const { body } = req

    logger.error(err.message, {
      error: err.message,
      body
    })
    return res.status(BAD_REQUEST).json({
        error: err.message,
        body
    })
  }
})

router.put('/:orderId', async (req: Request, res: Response) => {
  try {

    // await CreatePet({name: 'kay', owner: 'Bob'})
    return res.status(OK).json('test');
  } catch (err) {
    logger.error(err.message, err)
    return res.status(BAD_REQUEST).json({
        error: err.message
    })
  }
})

router.delete('/:orderId', async (req: Request, res: Response) => {
  try {

    // await CreatePet({name: 'kay', owner: 'Bob'})
    return res.status(OK).json('test');
  } catch (err) {
    logger.error(err.message, err)
    return res.status(BAD_REQUEST).json({
        error: err.message
    })
  }
})

export default router;
