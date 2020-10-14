import { Component } from '@angular/core';
import { User } from './classes/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UMS';
  //con angular router diventa tutto inutile
  // showForm = false;
  // userSelected = new User();

  // updateUser(user: User) {
  //   this.showForm = true;
  //   this.userSelected = user;
  // }

  // newUser() {
  //   //reinizializzo il form e lo mostro
  //   this.userSelected = new User();
  //   this.showForm = true;

  // }

}
