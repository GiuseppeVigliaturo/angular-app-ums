import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
  showmenu = true;
  constructor() {}

  ngOnInit() {}

  newUser() {
    this.onNewUser.emit();
  }
  toggleMenu(){
    this.showmenu = !this.showmenu
  }
}
