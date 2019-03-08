import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../userservice/userService';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import { distanceInWords } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentData: Date;
  @Input() isCollapsed: boolean;
  loading: boolean = false;

  constructor(private http: HttpClient, private userService: UserService, private storage: LocalStorageService,
              private router: Router) { }

  forumIs: boolean = false;
  content: any;
  title: any;
  detailIs: boolean = false;
  user: any;
  inviList: any[] = [];
  inviDetail: any[] = [{
    title: `title1`,
    creater: 'ccc',
    content: '内容内容内容'}];
  comment: string;
  ngOnInit() {
    this.currentData = new Date();
    this.loadData(1);
    this.user = this.storage.retrieve('user');
    this.getAll();
  }

  data: any[] = [];

  change(): void {

  }

  isVisible: boolean = false;

  loadData(pi: number): void {
   this.data = [];
   this.data = this.inviList.slice((pi-1)*4,pi*4);
  }

  getAll(){
      this.http.get(this.userService.tempUrl+'/v1/post/findAllPost')
    .subscribe(data=>{
      if(data['status'] === 'success'){
        this.inviList = data['data'];
        if(this.inviList.length > 4){
          this.data = this.inviList.slice(0,3);
        }else {
          this.data = this.inviList;
        }
      }else {

      }

    })
  }

  addInvi(){
    this.http.post(this.userService.tempUrl+'/v1/post/addPost',
      {
        title: this.title,
        creater: this.user,
        content: this.content
      })
      .subscribe(data=>{
        if(data['status'] === 'success'){
          this.getAll();
          this.title = '';
          this.content = '';
        }else {

        }

      })
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    this.isVisible = false;
    this.addInvi();

  }

  openModal(data){
    this.searhComment(data.id);
    if(this.inviDetail.length > 0){
      this.inviDetail = [];
      this.inviDetail.push(data);
    }else {
      this.inviDetail.push(data);
    }

    let timer =setTimeout(()=>{
        this.showModal2();

      }
    ,0)

  }

  handleCancel(): void {

    this.isVisible = false;
  }

  showModal2(): void {

      this.detailIs = true;

  }

  handleOk2(): void {

    this.detailIs = false;
    this.comment = '';
  }

  handleCancel2(): void {

    this.detailIs = false;
    this.comment = '';
  }

  logOut(){

    this.storage.clear('user');
    this.router.navigateByUrl('/login');

  }
  commentList: any[] = [];
  searhComment(id){
    this.http.get(this.userService.tempUrl+'/v1/post/findReplyByPost?postId='+id)
      .subscribe(data =>{
        if(data['status'] === 'success'){
             this.commentList = data['data'];
        }else {

        }
      });
  }

  addComment(){
     this.http.post(this.userService.tempUrl+'/v1/post/addReply', {
          post: this.inviDetail[0],
          creater: this.user,
          content: this.comment,
        })
          .subscribe(data =>{

            this.searhComment(this.inviDetail[0]['id']);
          });
  }
  deleteComment(data){
    this.http.delete(this.userService.tempUrl+'/v1/post/dropReply?id='+data.id)
      .subscribe(data =>{
        this.searhComment(this.inviDetail[0]['id']);
      });
  }

  deleteInvi(data){
    this.http.delete(this.userService.tempUrl+'/v1/post/dropPost?id='+data.id, )
      .subscribe(data =>{
        this.getAll();
      });

  console.log(data);
  }

}
