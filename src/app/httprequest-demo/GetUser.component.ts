import { Component, OnInit } from '@angular/core';
import { GetUserService, User } from './GetUser.service';

@Component({
  selector: 'app-getuser-demo',
  templateUrl: './GetUser.html'
})
export class GetUserDemoComponent implements OnInit {

  errorMessage: 'no error';
  user: User;


  constructor(private getUserService: GetUserService) {
  }

  ngOnInit() {
    this.user = {
      id: -1,
      userId: -1,
      title: 'noone',
      completed: false
    };
  }

  showUser() {
    this.getUserService.getUser()
      .subscribe((data: User) => {this.user = data; },
      (error) => {console.log('error'); },
      () => { }
      );

  }
}
