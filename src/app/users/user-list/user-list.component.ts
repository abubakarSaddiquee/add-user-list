import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
getUserData;
term;
id;
  constructor(private _designUtility: UserService) {


   }

  ngOnInit(): void {

    this._designUtility.UserData.subscribe(res => {
      this.getUserData = res;
      console.log("res", res)
      })

  }

}
