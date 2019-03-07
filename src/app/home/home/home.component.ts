import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../userservice/userService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentData: Date;
  @Input() isCollapsed: boolean;
  loading: boolean = false;

  constructor(private http: HttpClient, private userService: UserService) { }

  forumIs: boolean = false;
  content: any;
  title: any;
  detailIs: boolean = false;
  ngOnInit() {
    this.currentData = new Date();
    this.loadData(1);
  }

  data: any[] = [];

  change(): void {

  }

  isVisible: boolean = false;

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }

  getAll(){
    /*  this.http.get(this.userService.tempUrl)
    .subscribe{

  }*/
  }

  /*data = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [...this.data, {
        ...this.user,
        content,
        datetime: new Date(),
        displayTime: distanceInWords(new Date(), new Date())
      }].map(e => {
        return {
          ...e,
          displayTime: distanceInWords(new Date(), e.datetime)
        };
      });
    }, 800);
  }*/


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
  showModal2(): void {
    this.detailIs = true;
  }

  handleOk2(): void {

    this.detailIs = false;
   /* this.http.post(this.userService.tempUrl, {
      title: '',
      content: '',
      creater: '',
    })
      .subscribe(data =>{

      });*/
  }

  handleCancel2(): void {

    this.detailIs = false;
  }


}
