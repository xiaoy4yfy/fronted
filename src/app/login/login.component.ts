import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  currentData: Date;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.currentData = new Date();

    this.loginGroup = new FormGroup({
      username: new FormControl("admin", [Validators.required], []),
      password: new FormControl("111", [Validators.required], [])
    });
  }

  on_login_click() {
    console.log(this.loginGroup.value); // 获取所有数据
    console.log(this.loginGroup.controls['username'].value) // 获取某个数据
    console.log(this.loginGroup.get('username').value); // 获取某个数据
    if ((this.loginGroup.controls['username'].value !== "admin") || this.loginGroup.get('password').value != "111") {
      this._router.navigate(['/login']);
    } else {
      this._router.navigate(['/home']);
    }
    alert("提交登录信息");
  }

}
