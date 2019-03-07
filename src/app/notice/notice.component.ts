import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-work',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {



  registGroup: FormGroup;

  currentData: Date;
  user: any;

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService,
    private  storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.getAllNotice();
    this.user = this.storage.retrieve('user')
  }
  studentList: any[] = [{name: '小米'},{name: '小明'},{name: 'xiaoy'}];
  notice: any = {title: '' , value: ''};
  isVisible: boolean = false;
  noticeList: any[] = [];

  getAllNotice(){
      this.http.get(this.userService.tempUrl+'/v1/notice/findAll')
        .subscribe(data=>{
          if(data['status'] === 'success'){
            this.noticeList = data['data'];
          }else {

          }
        })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    this.isVisible = false;
    this.http.post(this.userService.tempUrl+'/v1/notice/add', {
      title: this.notice.title,
      content: this.notice.value,
      creter: this.user,
    })
      .subscribe(data =>{
        if(data['status'] === 'success'){
          this.getAllNotice();
        }else {

        }
      });

  }

  handleCancel(): void {

    this.isVisible = false;
  }

  delete(data){
    this.http.delete(this.userService.tempUrl+'/v1/notice/drop?id='+data.id)
      .subscribe(data =>{
        if(data['status'] === 'success'){
          this.getAllNotice();
        }else {

        }
      });
  }



}
