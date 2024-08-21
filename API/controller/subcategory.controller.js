import '../models/connection.js';
import rs from 'randomstring';
import url from 'url';
import path from 'path';

import SubCategorySchemaModel from '../models/subcategory.model.js';

export var save=async (req,res)=>{

 var scList=await SubCategorySchemaModel.find();    
 var l=scList.length;
 var _id=l==0?1:scList[l-1]._id+1;

var caticon=req.files.caticon;
var subcaticonnm = rs.generate()+"-"+Date.now()+"-"+caticon.name;
 var scDetails={...req.body,"subcaticonnm":subcaticonnm,"_id":_id};
 
 
 try {
  await SubCategorySchemaModel.create(scDetails);
  var __dirname = url.fileURLToPath(new URL('.',import.meta.url));
  var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/subcaticons",subcaticonnm);
  caticon.mv(uploadpath);
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
  var scList=await SubCategorySchemaModel.find(condition_obj);
  if(scList.length!=0)
    res.status(200).json(scList);
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



