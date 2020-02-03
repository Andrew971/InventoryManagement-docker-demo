import { logger } from '../utils'
import { Request, Response, Router, Express } from 'express'
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes'
const router = Router()

router.get('/', async (req: Request, res: Response) => {
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

router.get('/product', async (req: Request, res: Response) => {
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

router.post('/product', async (req: Request, res: Response) => {
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

router.put('/product', async (req: Request, res: Response) => {
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

router.delete('/product', async (req: Request, res: Response) => {
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
