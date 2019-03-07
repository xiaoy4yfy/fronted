import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';

@Component({
  selector: 'app-work',
  templateUrl: './gride.component.html',
  styleUrls: ['./gride.component.css']
})
export class GrideComponent implements OnInit {



  registGroup: FormGroup;

  currentData: Date;
  studentList: any[] = [{name: '小米'},{name: '小明'},{name: 'xiaoy'}];
  gride: string;
  isVisible: boolean = false;

  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService
  ) { }

  ngOnInit() {

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
    this.http.post(this.userService.tempUrl,{

      role: '',
      score: '',
      subject: ''})
      .subscribe( data =>{

      });


  }

  handleCancel(): void {

    this.isVisible = false;
  }




}
