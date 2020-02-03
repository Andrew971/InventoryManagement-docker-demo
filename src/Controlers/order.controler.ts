import Order, { IOrder, OrderStream } from '../Models/order.model'
import { logger } from '../utils';

interface IPlaceOrderInput {
  customer_email: IOrder['customer_email'];
  order_items: IOrder['order_items'];
}

export const PlaceOrder = async (body: IPlaceOrderInput) => {
  const { customer_email, order_items} = body
  return await Order.create({
    customer_email,
    order_items,
    status: 'CREATED'
  })
    .then((data: IOrder) => {
      OrderStream.emit('placedOrder', data)
      return data;
    })
    .catch((error: Error) => {
      logger.error(`couldn't place this order`, error);
    });
}

export default {
  PlaceOrder
}