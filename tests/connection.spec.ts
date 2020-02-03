import 'mocha'
import mongoose from 'mongoose'
import { logger } from '../src/utils'
const NODE_ENV = process.env.NODE_ENV

before('establishing connection to database', (done: any) => {
  const host = 'mongodb://mongo:27017'
  const database = 'tree-demo'
  const env = NODE_ENV || 'development'
  logger.info(`env:  ${env}`)
  const isProduction = env === 'production'
  const DBPrefix = !isProduction ? `-${env}` : ''

  const mongoDBURL = `${host}/${database}${DBPrefix}`
  logger.info(`mongoDBURL:  ${mongoDBURL}`)

  mongoose.connect(mongoDBURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false
    }
  ).then(() => {
    logger.info(`Successfully connected to ${mongoDBURL}`)
    done()
  })
  .catch((error) => {
    logger.error('Error connecting to database: ', error)
    done()
  })
})

// After all tests are finished drop database and close connection
after('closing connection to database', (done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(done);
  })
})
