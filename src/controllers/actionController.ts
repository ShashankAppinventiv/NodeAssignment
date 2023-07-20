import { actionSchema } from "../model/action";
import {typrEnum} from '../model/action'

const postData={
    UserId:"64b6751da177ac64572b4a35",
    PostId: "64b67ee6013b2d16ec8533e9",
    type:typrEnum.like,
    }

export const actionController=()=>{actionSchema.create(postData)
  .then((savedUser) => {
    console.log('User saved:', savedUser);
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });
}