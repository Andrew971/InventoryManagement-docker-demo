import mongoose from 'mongoose';
import { logger } from './utils'

interface IInput {
  host: string
  database: string
  env: string
}

export default ({host, database, env}: IInput) => {
  logger.info(`env:  ${env}`)
  const isProduction = env === 'production'
  const DBPrefix = !isProduction ? `-${env}` : ''

  const mongoDBURL = `${host}/${database}${DBPrefix}`
  const connect = () => {
    mongoose
      .connect(
        mongoDBURL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoIndex: isProduction ? false : true
          }
      )
      .then(() => {
        return logger.info(`Successfully connected to ${mongoDBURL}`);
      })
      .catch((error) => {
        logger.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
}
