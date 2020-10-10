import { Component, OnInit, Input } from "@angular/core";
import { User } from "../classes/user";
import { UserService } from "../services/user.service";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
})
export class UserDetailComponent implements OnInit {
  private usercopy;
  private __user;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) {

  }

  /**
   * Quando attiviamo il link per essere redirezionati intanto
   * creiamo un nuovo utente cosi da avere id pari a 0
   * poi catturiamo il parametro id passato nell'url
   */
  ngOnInit() {
    this.user = new User();
    this.route.params.subscribe((params) => {
      this.user = this.userService.getUser(+params.id);

    });
  }

  //aggiungere rotta per essere redirezionati alla home quando salvo

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
      this.router.navigate(['users']);
    } else {
      this.userService.createUser(this.user);
    }
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }
  }
}
