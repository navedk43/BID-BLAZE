import '../models/connection.js';
import rs from 'randomstring';
import url from 'url';
import path from 'path';

import ProductSchemaModel from '../models/product.model.js';

export var save=async (req,res)=>{

 var pList=await ProductSchemaModel.find();    
 var l=pList.length;
 var _id=l==0?1:pList[l-1]._id+1;

var picon=req.files.picon;
var piconnm = rs.generate()+"-"+Date.now()+"-"+picon.name;
 var pDetails={...req.body,"piconnm":piconnm,"_id":_id,"info":Date()};
 
 
 try {
  await ProductSchemaModel.create(pDetails);
  var __dirname = url.fileURLToPath(new URL('.',import.meta.url));
  var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/picons",piconnm);
  picon.mv(uploadpath);
  res.status(201).json({"status":true}); 
 }
 catch(error)
 {
    //console.log(error);
    res.status(500).json({"status":false});  
 } 
};


export var fetch=async(req,res)=>{
  var condition_obj=url.parse(req.url,true).query;    
  var pList=await ProductSchemaModel.find(condition_obj);
  if(pList.length!=0)
    res.status(200).json(pList);
  else
    res.status(404).json({"status":"Resource not found"});
};

/*
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
*/



