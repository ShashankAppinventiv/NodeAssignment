import { ffTable } from "../model/followFollowing";
import {statusEnum} from '../model/followFollowing'

const newUser={
    sender: "64b674eba177ac64572b4a33",
    receiver: "64b67c9f77b4ddc1246c3f91",
    status:statusEnum.pending
  }

export const ffController=()=>{ffTable.create(newUser)
  .then((savedUser) => {
    console.log('User saved:', savedUser);
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });
}