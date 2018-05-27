import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date()
  }

}
