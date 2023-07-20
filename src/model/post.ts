import mongoose, { Schema } from 'mongoose';

interface postDocument extends mongoose.Document {
    usrId:mongoose.Types.ObjectId;
    postId:string,
    caption : string,
    hashTags:object 
  }

const userSchema = new mongoose.Schema<postDocument>({
    usrId:{ type: Schema.Types.ObjectId, ref: 'User' },
    postId:String,
    caption :String,
    hashTags:Object
  });

export const post = mongoose.model<postDocument>('userPost', userSchema);