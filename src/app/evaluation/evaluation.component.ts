import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {


  gride: string;
  isVisible: boolean = false;
  title: string;
  content: string;
  user: any;
  constructor(
    private _router: Router, private http: HttpClient, private userService: UserService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {

    this.user = this.storage.retrieve('user');
  }



  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    alert('提交成功！');

  }




}
