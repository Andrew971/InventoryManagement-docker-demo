import mongoose, { Schema, Document } from 'mongoose'
import Inventory, { IIventory, IventorySchema } from './inventory.model'
import { logger } from '../utils';
import {EventEmitter} from 'events'

interface IEventStream {
  on(event: string | symbol, listener: (...args: any[]) => void): this
  emit(event: string | symbol, ...args: any[]): boolean;
}

export const OrderStream: IEventStream = new EventEmitter()

export interface IOrder extends Document {
  _id: string
  customer_email: string
  order_items: string
  status: string
  created_at: number
  updated_at: number
}

export const OrderItemSchema: Schema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  quantity_order: { type: String, required: true, min: 1, default: 1 },
  unit_price: { type: Number, required: true, default: 0 }
})

const OrderSchema: Schema = new Schema({
  customer_email: { type: String, required: true },
  order_items: [OrderItemSchema],
  status: { type: String, required: true }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}
)

OrderStream.on('placedOrder', (eventPayload, callback) => {
  logger.info('new order')
})

const model = mongoose.model<IOrder>('Order', OrderSchema)

export default model
