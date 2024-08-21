import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProductSchema  = mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: [true,"Title is required"],
    lowercase: true,
    trim: true
  },
  catnm: {
    type: String,
    required: [true,"Category Name is required"],
    lowercase: true,
    trim: true
  },
  subcatnm: {
    type: String,
    required: [true,"Sub Category Name is required"],
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: [true,"Description  is required"],
    lowercase: true,
    trim: true
  },
  baseprice: Number,
  piconnm: {
    type: String,
    required: [true,"Product Icon name is required"],
    trim: true
  },
  uid: String,
  info: String
 
});

// Apply the uniqueValidator plugin to UserSchema.
ProductSchema.plugin(uniqueValidator);

// compile schema to model
const ProductSchemaModel = mongoose.model('product_collection',ProductSchema);

export default  ProductSchemaModel