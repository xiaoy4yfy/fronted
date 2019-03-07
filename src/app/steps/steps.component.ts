import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-work',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {



  registGroup: FormGroup;

  currentData: Date;
  stepsModel: any = {title: '', content: ''};
  user: any;
  stepList: any[] = [];


  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService,
    private storage: LocalStorageService,
  ) { }

  ngOnInit() {
    this.getAllSteps();
   this.user = this.storage.retrieve('user');
  }

  getAllSteps(){
      this.http.get(this.userService.tempUrl+'/v1/progress/findAll')
    .subscribe(data =>{
       if(data['status'] === 'success'){
         this.stepList = data['data'];
       }else {

       }
    })
  }

  isVisible: boolean = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;

   this.http.post(this.userService.tempUrl+'/v1/progress/add', {
     title: this.stepsModel.title,
     describe: this.stepsModel.content,
     status: 0,
     creater: this.user,
   })
     .subscribe(data =>{
     if(data['status'] === 'success'){
       this.getAllSteps();
     }else {

     }
     });
  }

  handleCancel(): void {

    this.isVisible = false;
  }

  paas(data){
    this.http.put(this.userService.tempUrl+'/v1/progress/editById?id='+data.id, {
      status: 2,
    })
      .subscribe(data =>{
        if(data['status'] === 'success'){
          this.getAllSteps();
        }else {

        }
      });
  }

  unPass(data){
    this.http.put(this.userService.tempUrl+'/v1/progress/editById?id='+data.id, {
      status: 1,
      audit: 'error'
    })
      .subscribe(data =>{
        if(data['status'] === 'success'){
          this.getAllSteps();
        }else {

        }
      });
  }

  over(data){
    this.http.put(this.userService.tempUrl+'/v1/progress/editById?id='+data.id, {
      status: 3,
    })
      .subscribe(data =>{
        if(data['status'] === 'success'){
          this.getAllSteps();
        }else {

        }
      });
  }


}
