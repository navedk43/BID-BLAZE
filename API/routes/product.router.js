import express from 'express';
const router = express.Router();

import * as ProductController from '../controller/product.controller.js'; 

router.post("/save",ProductController.save);


router.get("/fetch",ProductController.fetch);

//router.patch("/update",ProductController.update);

//router.delete("/delete",ProductController.deleteUser);

export default router;