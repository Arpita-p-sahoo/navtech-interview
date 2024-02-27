import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any;

  constructor(private usersvc:UserDataService){}
  ngOnInit(): void {
    this.users = this.usersvc.userdata;
  }
}
