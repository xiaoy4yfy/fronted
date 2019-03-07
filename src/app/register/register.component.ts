import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {



  registGroup: FormGroup;

  currentData: Date;
  sex: any;
  role: any;
  isVisible: boolean = false;
  subject: string;
  schoolNumber: string;
  userModel: any = {};

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService
  ) { }

  ngOnInit() {
    this.currentData = new Date();

    this.registGroup = new FormGroup({
      username: new FormControl("", [Validators.required], []),
      password: new FormControl("", [Validators.required], []),
      name: new FormControl("", [Validators.required], []),
      sex: new FormControl("", [Validators.required], []),
      role: new FormControl("", [Validators.required], []),
    });
  }

  on_login_click() {


    if (this.registGroup.get('username').value && this.registGroup.get('password').value
      && this.registGroup.get('name').value && this.registGroup.get('sex').value
      && this.registGroup.get('role').value) {
      this.userModel['username'] = this.registGroup.get('username').value;
      this.userModel['password'] = this.registGroup.get('password').value;
      this.userModel['name'] = this.registGroup.get('name').value;
      this.userModel['sex'] = this.registGroup.get('sex').value === '男' ? 1 : 0;
      if(this.registGroup.get('role').value === '学生'){
        this.userModel['role'] = 1;
        this.creatNumber();

        }else if(this.registGroup.get('role').value === '老师'){
           this.userModel['role'] = 2;
           this.showModal();
      }else if(this.registGroup.get('role').value === '班主任'){
        this.userModel['role'] = 3;
        this.showModal();
      }else if(this.registGroup.get('role').value === '管理员'){
        this.userModel['role'] = 4;
      }

      this.http.post('http://localhost:8080/v1/registry',
        this.userModel)
        .subscribe(data =>{
          this._router.navigateByUrl('/login');
        });
    } else {
      alert('请填写所以相关参数！');
    }


  }

  register(){

    this._router.navigateByUrl('/register');
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
   this.userModel['subject'] = this.subject;
  }

  handleCancel(): void {

    this.isVisible = false;
  }

  creatNumber(){

  this.userModel['schoolNumber'] =  Math.ceil((Math.random()*10000))+"";
  }


}
