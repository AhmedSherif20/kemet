import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserStatusService } from 'src/app/services/user-status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links: any[] = [
    {
      path: 'home',
      label: 'home',
      icon: 'fa-house',
    },
    {
      path: 'hotels',
      label: 'hotels',
      icon: 'fa-hotel',
    },
    {
      path: 'crew',
      label: 'crew',
      icon: 'fa-briefcase',
    },
    {
      path: 'events',
      label: 'events',
      icon: 'fa-briefcase',
    },
    {
      path: 'weather',
      label: 'weather',
      icon: 'fa-cloud',
    },
    {
      path: 'currency',
      label: 'currencies',
      icon: 'fa-hand-holding-dollar',
    },
    {
      path: 'find-nearest',
      label: 'Find Nearest',
      icon: 'fa-map',
    },
    // {
    //   path: 'userX',
    //   label: 'contact us',
    //   icon: 'fa-headset',
    // },
  ];

  showNav: boolean = false;

  userLogged: boolean = false;

  constructor(
    private userStatusService: UserStatusService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.userStatusService.userLogged.subscribe((res) => {
      this.userLogged = res ?? false;
    });

    this.checkRouteChanging();
  }

  userLogOut() {
    this.userStatusService.logOut();
  }

  userProfile(): void {
    console.log('hiiiiiiiiii');

    // this._router.navigate(['/user']);
  }

  checkRouteChanging(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showNav = false;
      }
    });
  }
}
