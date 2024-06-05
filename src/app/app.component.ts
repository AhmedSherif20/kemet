import { Component, OnInit } from '@angular/core';
import { UserStatusService } from './services/user-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GPv15';

  constructor(private userStatusService: UserStatusService) {}

  ngOnInit(): void {
    this.checkUserLogging();
  }

  checkUserLogging() {
    const userStatus: boolean = this.userStatusService.isLoggedIn();

    if (userStatus) {
      const token: string | null = this.userStatusService.getToken();
      this.userStatusService.userToken.next(token ?? '');
      this.userStatusService.userLogged.next(true);
    }
  }
}
