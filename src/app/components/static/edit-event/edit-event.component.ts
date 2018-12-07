import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { Event } from '../../../models/event';

import { EventService } from '../../../services/event.service';
import { ProfileService } from '../../../services/profile.service';
import { OrganizationService } from '../../../services/organization.service';

import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})

export class EditEventComponent implements OnInit {

  constructor(private toastr: ToastrService,
              public dialog: MatDialog,
              public eventService: EventService,
              private profile: ProfileService,
              private organization: OrganizationService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
}

  onSubmit(form: NgForm) {
    console.log(form.value)
    let event = {name: form.value.name,
                 description: form.value.description};
                 console.log(event)
    this.eventService.updateEvent(this.profile.organizationID, form.value.id, event)
     .then(()=> {
         this.toastr.info('Evento Editado');
         this.profile.getEventsByOrganization(this.profile.organizationID)
          .then(res => {
            this.organization.events = res as Event[];
            this.organization.filteredEvents = res as Event[];
          });
            this.dialog.closeAll();
     });
  }

}
