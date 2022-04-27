import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  UserData = new BehaviorSubject( [
    {
name: "abubakar",
email: "abubakar.saddiq@gmail.com",
age: 24

   },
   {
    name: "salman",
    email: "abubakar.saddiq@gmail.com",
    age: 24

       },
       {
        name: "muhib",
        email: "abubakar.saddiq@gmail.com",
        age: 24

           },
  ])

   receiveData(data:any){
     this.UserData.next
     (this.UserData.getValue().concat(data))
     console.log("data",data)

   }









  constructor() {

   }
}
