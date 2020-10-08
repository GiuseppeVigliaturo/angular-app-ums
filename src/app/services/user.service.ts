import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';


@Injectable()

export class UserService {
  //avendo importato le interfacce dico che è un tipo array di user
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Hidran1',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43

    },
    {
      id: 2,
      name: 'Hidran2',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 3,
      name: 'Hidran3',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 4,
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
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

    //splice ci permette di inserire/eliminare un elemento di un array
    this.users.splice(0, 0, user);

  }
//per catturare il parametro passato nel link
//passo l'id dal link e resituisco l'utente corrispondente
  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }
}

