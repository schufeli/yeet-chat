import { Component } from '@angular/core';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'YeetChatApplication';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.set('Burger');
  }
}
