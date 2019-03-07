import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';

@Component({
  selector: 'app-work',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {



  registGroup: FormGroup;

  currentData: Date;

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService
  ) { }

  ngOnInit() {

  }
  studentList: any[] = [{name: '小米'},{name: '小明'},{name: 'xiaoy'}];
  notice: any = {title: '' , value: ''};
  isVisible: boolean = false;

  getAllNotice(){
    /*  this.http.get(this.userService.tempUrl)
    .subscribe{

  }*/
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    alert(this.notice.title+'---'+this.notice.value);
    this.isVisible = false;
    this.http.post(this.userService.tempUrl, {
      title: '',
      content: '',
      creter: '',
    })
      .subscribe(data =>{

      });

  }

  handleCancel(): void {

    this.isVisible = false;
  }



}
