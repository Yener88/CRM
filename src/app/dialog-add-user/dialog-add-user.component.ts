import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
 birtDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = new Date(this.user.birthDate).getTime();
    console.log('Current User is', this.user);
  }

}
