import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  currentData: Date;

  constructor(
    private _router: Router, private http: HttpClient,private userService: UserService, private storage: LocalStorageService ) { }

  ngOnInit() {
    this.currentData = new Date();

    this.loginGroup = new FormGroup({
      username: new FormControl("", [Validators.required], []),
      password: new FormControl("", [Validators.required], [])
    });
  }
 // ip地址 172.10.10.12
  on_login_click() {

   if(this.loginGroup.get('username').value && this.loginGroup.get('password').value){

     this.http.post(this.userService.tempUrl+'/v1/login',this.loginGroup.value)
       .subscribe(data=>{
         if(data['status'] === 'success'){
           this._router.navigate(['/home']);
           this.storage.store('user',data['data']);
         }else {
         }

       });

   }else {
     alert('用户名不能为空！');
   }

  }



  register(){

    this._router.navigateByUrl('/register');
  }

}
