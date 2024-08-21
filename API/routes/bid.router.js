import express from 'express';
const router = express.Router();

import * as BidController from '../controller/bid.controller.js'; 

router.post("/save",BidController.save);


router.get("/fetch",BidController.fetch);

//router.patch("/update",BidController.update);

//router.delete("/delete",BidController.deleteUser);

export default router;