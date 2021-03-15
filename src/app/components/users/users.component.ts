
import { Component, OnInit, ViewChild } from '@angular/core';
import { User }  from '../../models/User';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls:   ['./users.component.css']
  
})
export class UsersComponent implements OnInit {
   users: User[];
   showExtended: boolean = false;
   loaded: boolean = false; 
   enableAdd: boolean = false;
   showUserForm: boolean = false;
   data: any;
   @ViewChild('userForm') form: any;
   user: User = {
      firstName: '',
      lastName: '',
      email: '', 
   }

   //properties
  constructor(private userService: UserService) { }

  ngOnInit(): void
  {

        this.userService.getData().subscribe(data => {
           console.log(data)
        })


        this.users= this.userService.getUsers();



         this.loaded = true; 
         
     }

     onSubmit({value, valid}: {value: User, valid: boolean}) {
          if(!valid){
           console.log('Form is not valid');
          } else {
             value.isActive = true;
             value.registered = new Date();
             value.hide = true;



          
            this.userService.addUser(value);
  
             this.form.reset();
          }
     }
     



   }
   

 