import '../models/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';

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

export var fetch=async(req,res)=>{
  var condition_obj=url.parse(req.url,true).query;    
  var userList=await UserSchemaModel.find(condition_obj);
  if(userList.length!=0)
    res.status(200).json(userList);
  else
    res.status(404).json({"status":"Resource not found"});
};

export var update=async(req,res)=>{
  let userDetails = await UserSchemaModel.findOne((req.body.condition_obj));
  if(userDetails){
      let user=await UserSchemaModel.updateOne(req.body.condition_obj,{$set: req.body.content_obj});   
      if(user)
        res.status(200).json({"msg":"success"});
      else
        res.status(500).json({"status": "Server Error"});
  }
  else
    res.status(404).json({"status":"Requested resource not available"});       
};

export var deleteUser=async(req,res)=>{
  console.log(req.body);
  let userDetails = await UserSchemaModel.findOne(req.body);
  if(userDetails){
      let user=await UserSchemaModel.deleteOne(req.body );   
      if(user)
        res.status(200).json({"msg":"success"});
      else
        res.status(500).json({"status": "Server Error"});
  }
  else
    res.status(404).json({"status":"Requested resource not available"});       
};




