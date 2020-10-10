import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';


@Injectable()

export class UserService {
  //avendo importato le interfacce dico che è un tipo array di user
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Giuseppe',
      lastname: 'Vigliaturo',
      email: 'vigliaturo@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '123456789',
      age: 26

    },
    {
      id: 2,
      name: 'Giuseppe2',
      lastname: 'Vigliaturo2',
      email: 'vigliaturo2@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '123456789',
      age: 50

    },
    {
      id: 3,
      name: 'Giuseppe3',
      lastname: 'Vigliaturo3',
      email: 'vigliaturo3@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '123456789',
      age: 44

    },
    {
      id: 4,
      name: 'Giuseppe4',
      lastname: 'Vigliaturo4',
      email: 'vigliaturo4@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '123456789',
      age: 34

    }

  ];
  constructor() {
  }
  getUsers() {
    return this.users;
  }
  deleteUser(user) {
    let index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    //il metodo findIndex passa tutti gli elementi dell'array
    //e li controlla uno per uno per vedere se verificano la condizione
    //sarebbe come dire this.users.findIndex(user:elemento users)
    const idx = this.users.findIndex((v) => v.id === user.id);
   // alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {
    user.id = this.users.length + 1;
    //alert(user)
    //splice ci permette di inserire/eliminare un elemento di un array
    this.users.splice(0, 0, user);

  }
//per catturare il parametro passato nel link
//passo l'id dal link e resituisco l'utente corrispondente
  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }
}

