import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import fileUpload from 'express-fileupload';

const app = express();

//to link routers
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import ProductRouter from './routes/product.router.js';
import BidRouter from './routes/bid.router.js';

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//to extract binary content 
app.use(fileUpload());

// to allow cors origin request
app.use(cors());

//route level middleware to load routes
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);
app.use("/product",ProductRouter);
app.use("/bid", BidRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");