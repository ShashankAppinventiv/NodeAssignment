import mongoose, { Schema } from 'mongoose';

export enum typrEnum {
    like="like",
    comment="comment"
  }

interface followFollowingDocument extends mongoose.Document {
    UserId:mongoose.Types.ObjectId;
    PostId: mongoose.Types.ObjectId;
    type:typrEnum,
    comment_content:string,
    sub_comment:[{
        user_id:mongoose.Types.ObjectId,
        content:String
    }]    
  }

const userSchema = new mongoose.Schema<followFollowingDocument>({
    UserId: { type: Schema.Types.ObjectId, ref: 'users' },
    PostId:  { type: Schema.Types.ObjectId, ref: 'userposts' },
    type:Object.values(typrEnum),
    comment_content:String,
    sub_comment:[{
        user_id:mongoose.Types.ObjectId,
        content:String
    }]    
  });

export const actionSchema = mongoose.model<followFollowingDocument>('action', userSchema);