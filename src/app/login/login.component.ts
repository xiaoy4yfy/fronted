import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  currentData: Date;

  constructor(
    private _router: Router, private http: HttpClient,private userService: UserService ) { }

  ngOnInit() {
    this.currentData = new Date();

    this.loginGroup = new FormGroup({
      username: new FormControl("", [Validators.required], []),
      password: new FormControl("", [Validators.required], [])
    });
  }
 // ip地址 172.10.10.12
  on_login_click() {



   /* console.log(this.loginGroup.value); // 获取所有数据
    console.log(this.loginGroup.controls['username'].value) // 获取某个数据
    console.log(this.loginGroup.get('username').value); // 获取某个数据
    if ((this.loginGroup.controls['username'].value !== "admin") || this.loginGroup.get('password').value != "111") {
      this._router.navigate(['/login']);
    } else {
      this._router.navigate(['/home']);
    }*/
   if(this.loginGroup.get('username').value && this.loginGroup.get('password').value){

     console.log(this.loginGroup.value);

     this._router.navigate(['/home']);

     /*this.http.post(this.userService.tempUrl,this.loginGroup.value)
       .subscribe(

       );*/
   }else {
     alert('用户名不能为空！');
   }

  }



  register(){

    this._router.navigateByUrl('/register');
  }

}
