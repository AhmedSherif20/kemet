import { Component, OnInit } from '@angular/core';
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
      path: 'jobs',
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
      path: 'contact us',
      label: 'contact us',
      icon: 'fa-headset',
    },
  ];

  showNav: boolean = false;

  userLogged: boolean = false;

  constructor(private userStatusService: UserStatusService) {}

  ngOnInit(): void {
    this.userStatusService.userLogged.subscribe((res) => {
      this.userLogged = res ?? false;
    });
  }

  userLogOut() {
    this.userStatusService.logOut();
  }
}
