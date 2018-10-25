import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-ivot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private auth: AuthService){
    auth.handleAuthentication();  // Method Need to Log in with Auth0
  }
}
