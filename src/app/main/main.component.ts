import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  value:any=[];
  constructor(private fb:FormBuilder,private userdatasvc:UserDataService ){}
  
  Login = this.fb.group({
    firstname:new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    phone:new FormControl('',Validators.pattern('/[0-9]/'))
  });
   

  OnSubmitLoginForm=()=>{
    // this.value.push(this.Login.value);
    this.userdatasvc.userdata.push(this.Login.value);
    
  }
}
