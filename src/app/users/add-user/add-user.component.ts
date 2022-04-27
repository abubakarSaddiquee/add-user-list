import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {EmailValidator, FormGroup, FormControl, Validator, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userData:FormGroup

  constructor( private _designUtility:UserService, private router: Router) { }

  ngOnInit(): void {
    this.userData= new FormGroup({
      name:new FormControl("", [Validators.required]),
      email:new FormControl("",[Validators.required, Validators.email]),
      age: new FormControl("", Validators.required),
    })
  }


  getUserData(){
this._designUtility.receiveData(this.userData.value),  this.router.navigate([''])

  }
  get name(){return this.userData.get('name')}
  get email(){return this.userData.get('email')}
  get age(){return this.userData.get("age")}

}
