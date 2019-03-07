import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';



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

  scope: number;

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService,private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.getList();
    this.scope = this.storage.retrieve('user')['role'];
  }

  getList(){
   this.http.get(this.userService.tempUrl+'/v1/task/findAll')
     .subscribe( data =>{
       if(data['status'] === 'success'){
         console.log(data);
         this.list = data['data'];
       }else {
       }

     });
  }

  showModal(): void {
    this.isVisible = true;
  }

  // 创建任务 传入user对象
  handleOk(): void {
    this.isVisible = false;
    this.http.post(this.userService.tempUrl+'/v1/task/add',
   {title: this.title,
        content: this.content,
        creater: this.storage.retrieve('user')})
      .subscribe(data =>{
          if(data['status'] === 'success'){
              this.getList()
          }else {
          }
      })
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
  delete(data){
    console.log(data);

     this.http.delete(this.userService.tempUrl+'/v1/task/drop?id='+data['id'],)
    .subscribe(data =>{
          if(data['status'] === 'success'){
              this.getList();
          }else {
          }
    })
  }

}
