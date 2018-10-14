import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent {

  appTitle: string;

  constructor(private auth: AuthService) {
    this.appTitle = 'Sharing Votes';
  }

    login() {
      this.auth.login();
    }

  }
