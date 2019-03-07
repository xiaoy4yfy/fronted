import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';

@Component({
  selector: 'app-work',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
})
export class TypeComponent implements OnInit {



  registGroup: FormGroup;
  isVisible = false;
  type: string;
  selectedValue: string;
  studentList: any[] = [{name: '小米'},{name: '小明'},{name: 'xiaoy'}];
  currentData: Date;
  student: any;

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService
  ) { }

  ngOnInit() {

  }

  getType(){
  /*  this.http.get(this.userService.tempUrl)
      .subscribe{

    }*/
  }

  getAllStudent(){
    /*  this.http.get(this.userService.tempUrl)
    .subscribe{

  }*/
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    this.isVisible = false;

    this.http.post(this.userService.tempUrl,{id: '',
      position: this.type,
      role: ''})
      .subscribe( data =>{

      });

  }

  handleCancel(): void {

    this.isVisible = false;
  }




}
