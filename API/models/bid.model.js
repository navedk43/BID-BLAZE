import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const BidSchema  = mongoose.Schema({
  _id: Number,
  p_id: Number,
  bidprice : Number,
  u_id : String,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
BidSchema.plugin(uniqueValidator);

// compile schema to model
const BidSchemaModel = mongoose.model('bid_collection',BidSchema);

export default  BidSchemaModel