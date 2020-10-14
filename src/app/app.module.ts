import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { RouterModule, Routes } from "@angular/router";
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full",
  },
  {
    path: "users/new",
    component: UserDetailComponent,
  },
  {
    path: 'users/:id',
    component: UserTableComponent
  },
  {
    path: "users/:id/edit",
    component: UserDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavbarComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
