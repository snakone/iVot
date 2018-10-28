import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../../services/organization.service';
import { Event } from '../../../../models/event';

import { CreateEventComponent } from '../../../static/create-event/create-event.component';

import { MatDialog } from '@angular/material';  // Dialog


@Component({
  selector: 'organization-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  searchValue: string;
  search: boolean = false;

  constructor(public organization: OrganizationService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewEvent(){
    const dialogRef = this.dialog.open(CreateEventComponent,{});  // New Dialog
  }

  openSearch(){
    if (this.search == false) {
      this.search = !this.search;
    } else {
      let bar = document.getElementById("animated")
      bar.classList.remove("bounceInLeft");
      bar.classList.add("zoomOutLeft");
      setTimeout(()=> {
        this.search = false;
      }, 1000)
    }
    this.organization.filteredEvents = this.organization.events;
  }

  onKeyUp(event){  // On Key Up Javascript Event
    event.preventDefault();
    this.filterEventbySearch();
    }

  filterEventbySearch() {
    this.organization.filteredEvents = this.organization.events
      .filter((event, index) => {  // Filter Array
     return event.name.includes(this.searchValue);
    });
  }



}
