import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.css']
})

export class OrganizationCardComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
  }

}
