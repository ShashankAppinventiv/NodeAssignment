import mongoose, { Schema } from 'mongoose';


interface followFollowingDocument extends mongoose.Document {
    UserId:mongoose.Types.ObjectId;
    Token:String,
    expire_date:Date;    
  }

const sessionSchema = new mongoose.Schema<followFollowingDocument>({
    UserId: { type: Schema.Types.ObjectId, ref: 'users' },
    Token:String,
    expire_date:Date
  });


export const sessionModel = mongoose.model<followFollowingDocument>('session', sessionSchema);