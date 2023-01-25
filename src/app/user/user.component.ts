import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User()

  constructor() { }

  ngOnInit(): void {
  }


  dialogAddUserOpenClose() {
    const dialogAddUserOpenClose = document.getElementById('dialogAddUser');
    const dialogAddUserBG = document.getElementById('dialogAddUserBG');
    if (dialogAddUserOpenClose) {
      if (dialogAddUserOpenClose.classList.contains('d-none')) {
        dialogAddUserOpenClose.classList.remove('d-none');
        dialogAddUserOpenClose.classList.add('slideOpenDialog');
        if (dialogAddUserBG) {
          dialogAddUserBG.classList.remove('d-none');
        }
        const animationEnd = function () {
          dialogAddUserOpenClose.classList.remove('slideOpenDialog');
          dialogAddUserOpenClose.removeEventListener('animationend', animationEnd);
        };
        dialogAddUserOpenClose.addEventListener('animationend', animationEnd);
      } else {
        dialogAddUserOpenClose.classList.add('slideCloseDialog');
        if (dialogAddUserBG) {
          dialogAddUserBG.classList.add('d-none');
        }
        const animationEnd = function () {
          dialogAddUserOpenClose.classList.remove('slideCloseDialog');
          dialogAddUserOpenClose.classList.add('d-none');
          dialogAddUserOpenClose.removeEventListener('animationend', animationEnd);
        };
        dialogAddUserOpenClose.addEventListener('animationend', animationEnd);
      }
    }
  }
}