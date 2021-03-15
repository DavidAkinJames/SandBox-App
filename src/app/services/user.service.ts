import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/Observable';


import { User } from '../models/User';

 
@Injectable({
  providedIn: 'root'
})
export class UserService {
    users: User[];
    data: Observable<any>;



  constructor() { 
    this.users = [
     
     {
      firstName: 'Harry',
      lastName: 'Kane',
      email: 'harrykane@gmail.com',
      isActive: false,
      registered: new Date('03/04/2020 10:20: 00'),
      hide:true

     },
     
      {
      firstName: 'Liam',
      lastName: 'Thomas',
       email: 'liam000@yahoo.com',
     isActive: true,
     registered: new Date('02/11/2017 08:20:00'),
     hide: true
   },

  {
    firstName: 'Steven',
    lastName: 'Lampard',
    email: 'lampardsteven@yahoo.com',
    isActive: true,
    registered: new Date('09/10/2016 09:25:00'),
    hide: true
  }
  
 ];
  }
   
  getData() {
    this.data = new Observable(observer => {
        setTimeout(() => {
          observer.next(1);
        }, 1000);

        setTimeout(() => {
          observer.next(2);
        }, 2000);

        setTimeout(() => {
          observer.next(3);
        }, 3000);

        setTimeout(() => {
          observer.next({name: 'David'});
        }, 4000);
    });

    return this.data;
  }


  getUsers(): User[] {
    return this.users;
  }


  addUser(user: User){
     this.users.unshift(user);
  }
}
