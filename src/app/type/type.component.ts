import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-work',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
})
export class TypeComponent implements OnInit {



  registGroup: FormGroup;
  isVisible = false;
  isVisible2 = false;
  type: string;
  selectedValue: string;
  selectedValue2: any;
  studentList: any[] = [];
  teachersList: any[] = [];
  currentData: Date;
  student: any;
  user: any;
  teacherRole: number

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
  this.getAllStudent();
    this.getAllteacher();
  this.user = this.storage.retrieve('user')
  }

  getType(){
  /*  this.http.get(this.userService.tempUrl)
      .subscribe{

    }*/
  }

  getAllStudent(){

      this.http.get(this.userService.tempUrl+'/v1/role/findStudents')
    .subscribe(data=>{
      if(data['status'] === 'success'){
        this.studentList = data['data']
      }
    })
  }

  getAllteacher(){

    this.http.get(this.userService.tempUrl+'/v1/role/findTeachers')
      .subscribe(data=>{
        if(data['status'] === 'success'){
          this.teachersList = data['data']
        }
      })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    this.isVisible = false;

    this.http.put(this.userService.tempUrl+'/v1/role/editById?id='+this.selectedValue,
      {
      position: this.type
      })
      .subscribe( data =>{
       if(data['status'] === 'success'){
          this.getAllStudent();
       }else {

       }
      });

  }

  handleCancel2(): void {

    this.isVisible2 = false;
  }

  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk2(): void {

    this.isVisible2 = false;

    this.http.put(this.userService.tempUrl+'/v1/role/editById?id='+this.selectedValue2.id,
      {
        role: this.teacherRole,
      })
      .subscribe( data =>{
        if(data['status'] === 'success'){
          this.getAllteacher();
        }else {

        }
      });

  }

  handleCancel(): void {

    this.isVisible = false;
  }




}
