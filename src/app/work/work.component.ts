import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';



@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {



  registGroup: FormGroup;
  isVisible = false;
  workValue: string;
  workList: any[] = [];
  list: any[] = [];
  title: string;
  content: string;

  currentData: Date;

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService
  ) { }

  ngOnInit() {

  }

  getList(){
   /*this.http.get(this.userService.tempUrl)
     .subscribe( data =>{
       this.list = data['data'];
     });*/
  }

  showModal(): void {
    this.isVisible = true;
  }

  // 创建任务 传入user对象
  handleOk(): void {
    console.log(this.workValue);
    this.isVisible = false;
    this.workList.push(this.content);
    this.list = [...this.workList];
   /* this.http.post(this.userService.tempUrl,
   {title: this.title,
    content: this.content
     creater: this.user})
      .subscribe(data =>{

      })*/
  }

  handleCancel(): void {
   this.workValue = '';
    this.isVisible = false;

  }

  edit(){
    alert('edit');
    /* this.http.post(this.userService.tempUrl,
   {title: this.title,
    content: this.content
     creater: this.user})
      .subscribe(data =>{

      })*/
  }
  delete(){
    alert('delete');
    /* this.http.post(this.userService.tempUrl,
 {title: this.title,
  content: this.content
   creater: this.user})
    .subscribe(data =>{

    })*/
  }

}
