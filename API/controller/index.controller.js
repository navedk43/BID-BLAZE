import '../models/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';

import UserSchemaModel from '../models/user.model.js';

export var save=async (req,res)=>{

 var usersList=await UserSchemaModel.find();    
 var l=usersList.length;
 var _id=l==0?1:usersList[l-1]._id+1;
 var userDetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};
 
 try {
  await UserSchemaModel.create(userDetails);
  res.status(201).json({"status":true}); 
 }
 catch(error)
 {
    //console.log(error);
    res.status(500).json({"status":false});  
 } 
};


export var login=async (req,res)=>{  
 var condition_obj={...req.body,"status":1};         
 var usersList=await UserSchemaModel.find(condition_obj);
 if(usersList.length!=0)
 {
   const payload={"subject":usersList[0].email};     
   const key=rs.generate();
   const token=jwt.sign(payload,key);
   res.status(200).json({"token":token,"userDetails":usersList[0]});
 }
 else
   res.status(500).json({"token":"error"});
}; 






