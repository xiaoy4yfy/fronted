import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-work',
  templateUrl: './gride.component.html',
  styleUrls: ['./gride.component.css']
})
export class GrideComponent implements OnInit {



  registGroup: FormGroup;

  currentData: Date;
  gride: string;
  isVisible: boolean = false;
  isVisible2: boolean = false;
  studentList: any = [];
  selectValue: any;
  subject: string;
  score: any;
  user: any;
  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.getAllTeachers();
    this.getAllStudent();
    this.getAllScore();
    this.subject = this.storage.retrieve('user')['subject'];
    this.user = this.storage.retrieve('user');
  }

  getAllStudent(){

    this.http.get(this.userService.tempUrl+'/v1/role/findStudents')
      .subscribe(data=>{
        if(data['status'] === 'success'){
          this.studentList = data['data']
        }
      })
  }

  ownScore(){

  }

  getAllScore(){
    this.http.get(this.userService.tempUrl+'/v1/score/findAll')
      .subscribe(data=>{
        if(data['status'] === 'success'){
         this.score = data['data'];
        }
      })
  }

  getAllTeachers(){
      this.http.get(this.userService.tempUrl+'/v1/role/findTeachers')
    .subscribe(data => {
      if(data['status'] === 'success'){
        console.log(data);
      }
    })
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.http.post(this.userService.tempUrl+'/v1/score/add',{

      student: this.selectValue,
      score: parseInt(this.gride),
      subject: this.subject})
      .subscribe( data =>{
        if( data['status'] === 'success'){
          this.getAllScore();
        }else {

        }
      });


  }

  handleCancel(): void {

    this.isVisible = false;
  }

  showModal2(): void {

  }

  handleOk2(): void {
    this.isVisible2 = false;
    this.http.put(this.userService.tempUrl+'/v1/score/editById?id='+this.editModel.id,{
      score: parseInt(this.gride),})
      .subscribe( data =>{
        if( data['status'] === 'success'){
          this.getAllScore();
        }else {

        }
      });

  }

  handleCancel2(): void {

    this.isVisible2 = false;
  }
  editModel: any;
   editScore(item){

     this.editModel = item;
     this.isVisible2 = true;

   }


}
