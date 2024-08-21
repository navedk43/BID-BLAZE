import mongoose from 'mongoose';
const url="mongodb://localhost:27017/stackbatch830-3may";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");
