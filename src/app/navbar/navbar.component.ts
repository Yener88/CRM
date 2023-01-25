import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openAndCloseNavbar() {
    const navbarMenu = document.getElementById('navbarMenu');
    const contentChangeSize = document.getElementById('routerContainer');
    const navBarChangeSize = document.getElementById('navbar');
    if (navbarMenu) {
      if (navbarMenu.classList.contains('d-none')) {
        navbarMenu.classList.add('slideOpenMenu');
        navbarMenu.classList.remove('d-none');
        if (contentChangeSize && navBarChangeSize) {
          contentChangeSize.classList.add('slideOpenContent');
          if (navBarChangeSize) {
            navBarChangeSize.classList.add('slideOpenContent');
          }
          const animationEnd = function () {
            navbarMenu.classList.remove('slideOpenMenu');
            contentChangeSize.classList.remove('slideOpenContent');
            if (navBarChangeSize) {
              navBarChangeSize.classList.remove('slideOpenContent');
            }
            navbarMenu.removeEventListener('animationend', animationEnd);
          };
          navbarMenu.addEventListener('animationend', animationEnd);
          contentChangeSize.style.setProperty('width', '80vw');
          contentChangeSize.style.setProperty('margin-left', '20vw');
          navBarChangeSize.style.setProperty('width', '80vw');
          navBarChangeSize.style.setProperty('margin-left', '20vw');
        }
      } else {
        navbarMenu.classList.add('slideCloseMenu');
        if (contentChangeSize && navBarChangeSize) {
          contentChangeSize.classList.add('slideCloseContent');
          if (navBarChangeSize) {
            navBarChangeSize.classList.add('slideCloseContent');
          }
          const animationEnd = function () {
            navbarMenu.classList.remove('slideCloseMenu');
            contentChangeSize.classList.remove('slideCloseContent');
            if (navBarChangeSize) {
              navBarChangeSize.classList.remove('slideCloseContent');
            }
            navbarMenu.classList.add('d-none');
            navbarMenu.removeEventListener('animationend', animationEnd);
          };
          navbarMenu.addEventListener('animationend', animationEnd);
          contentChangeSize.style.setProperty('width', '100vw');
          contentChangeSize.style.setProperty('margin-left', '0vw');
          navBarChangeSize.style.setProperty('width', '100vw');
          navBarChangeSize.style.setProperty('margin-left', '0vw');
        }
      }
    }
  }

}

