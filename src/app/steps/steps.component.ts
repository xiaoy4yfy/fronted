import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';

@Component({
  selector: 'app-work',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {



  registGroup: FormGroup;

  currentData: Date;
  stepsModel: any = {title: '', content: ''};

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService
  ) { }

  ngOnInit() {

  }

  getAllSteps(){
    /*  this.http.get(this.userService.tempUrl)
    .subscribe{

  }*/
  }

  isVisible: boolean = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;

   this.http.post(this.userService.tempUrl, {
     title: '',
     content: '',
     creater: '',
   })
     .subscribe(data =>{

     });
  }

  handleCancel(): void {

    this.isVisible = false;
  }


}
