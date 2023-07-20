import mongoose from 'mongoose';

interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    isPrivateAccount:boolean;
    address:{
        city:string,
        state:string,
        country:string
    }
  }

const userSchema = new mongoose.Schema<UserDocument>({
    name: String,
    email: String,
    password: String,
    isPrivateAccount:Boolean,
    address:{
        city:String,
        state:String,
        country:String
    }
  });

export const User = mongoose.model<UserDocument>('user', userSchema);