import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  @Output('updateUser') updateUser = new EventEmitter<User>();

  title = 'Users';
  users: User[] = [];


  constructor(private userService: UserService) {


  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  onDeleteUser(user: User) {
    //alert(user.name)
    this.userService.deleteUser(user);
  }
  onSelectUser(user: User) {
    const userCopy = Object.assign({},user);
    this.updateUser.emit(userCopy);

  }
}
