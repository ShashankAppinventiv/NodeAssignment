import { post } from "../model/post";
import {Request,Response} from "express";
import { object } from "joi";
import jwt from "jsonwebtoken";



export const postController=(req:Request,res:Response)=>{
    const token=""+req.headers.authorization
    try{
      let decoded:any = jwt.verify(token, 's1h2a3');
      decoded=Object.values(decoded)[0];
      let postData={
        usrId:decoded._id,
        postId:req.body.postId,
        caption:req.body.caption,
        hashTags:[req.body.hashtag]
      }
      post.create(postData)
      .then((savedUser) => {
      console.log('User saved:', savedUser);
      })
      .catch((error) => {
      console.error('Error saving user:', error);
      });
    }catch(err){
      console.log("Error Data is Crupted")
    }
  
}
