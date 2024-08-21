import express from 'express';
const router = express.Router();

import * as CategoryController from '../controller/Category.controller.js'; 

router.post("/save",CategoryController.save);


router.get("/fetch",CategoryController.fetch);

//router.patch("/update",CategoryController.update);

//router.delete("/delete",CategoryController.deleteUser);

export default router;