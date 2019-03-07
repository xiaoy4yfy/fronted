import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../userservice/userService';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  currentDate: Date;
  noticeList: any[] = [];
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.getAllNotice();
  }

  listDataMap = {
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  getAllNotice(){
    this.http.get(this.userService.tempUrl+'/v1/notice/findAll')
      .subscribe(data=>{
        if(data['status'] === 'success'){
          this.noticeList = data['data'];
        }else {

        }
      })
  }

}
