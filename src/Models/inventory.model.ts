import mongoose, { Schema, Document } from 'mongoose'

export interface IIventory extends Document {
  _id: string;
  customer_email: string;
  order_items: string;
  status: string;
  created_at: number;
  updated_at: number;
}

export const IventorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const model = mongoose.model<IIventory>('Iventory', IventorySchema)

export default model
