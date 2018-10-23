import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})

export class ProfileCardComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
  }

}
