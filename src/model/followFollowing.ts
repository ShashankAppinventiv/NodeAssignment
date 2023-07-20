import mongoose, { Schema } from 'mongoose';

export enum statusEnum {
    accepted= "accepted",
    rejected="rejected",
    pending="pending",
  }

interface followFollowingDocument extends mongoose.Document {
    sender:mongoose.Types.ObjectId;
    receiver: mongoose.Types.ObjectId;
    status: statusEnum    
  }

const userSchema = new mongoose.Schema<followFollowingDocument>({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    receiver:{ type: Schema.Types.ObjectId, ref: 'User' },
    status:Object.values(statusEnum)
  });

export const ffTable = mongoose.model<followFollowingDocument>('followFollowing', userSchema);