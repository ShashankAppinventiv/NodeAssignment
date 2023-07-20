import {sessionModel} from '../model/session'
const postData={
    UserId:"64b5f1c586948942ee28525c",
    Token:"sudf2i73gbhdg7ydf3vdufy",
    date: "2023-07-13T06:55:24.698Z"
    }

export const sessionController=()=>{sessionModel.create(postData)
  .then((savedUser) => {
    console.log('User saved:', savedUser);
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });
}