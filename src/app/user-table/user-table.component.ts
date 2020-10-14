import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

   User: User;
  constructor(private route: ActivatedRoute, private userService: UserService,

    private router: Router) { }

    //catturo il parametro abbonandomi alla rotta
  ngOnInit() {
    this.route.params.subscribe(p => {

      //una volta catturato il parametro dall'url della rotta restituisco l'utente corrispondente
      this.User = this.userService.getUser(+p.id);
    });

  }
  backToUsers() {
    this.router.navigate(['users']);
  }

}
