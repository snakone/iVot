import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { ProfileService } from '../../../services/profile.service';
import { EventService } from '../../../services/event.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

import { Event } from '../../../models/event';

import { MatDialog } from '@angular/material';  // Dialog
import { OrganizationService } from '../../../services/organization.service';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {

  selectedEvent: Event = <Event>{};

  constructor(private toastr: ToastrService,
              public profileService: ProfileService,
              private eventService: EventService,
              private organization: OrganizationService,
              private router: Router,
              public dialog: MatDialog,
              private auth: AuthService) { }

  ngOnInit() {

  }

  addEvent(form?: NgForm) {
       try {
          form.value.eventDate = this.yyyymmdd(form.value.eventDate);  // Get DATE Format
       } catch(err){
          alert('Por favor, Introduce una fecha correcta');
          return false;
       }
         this.eventService.addEvent(form.value)  // Add Event
         .subscribe(res => {
           this.toastr.success('Evento Creado');
           this.profileService.getEventsByOrganization(form.value.id)
            .then(res => {
              this.organization.events = res as Event[];
              this.organization.filteredEvents = res as Event[];
            });
              this.dialog.closeAll();
         });
   }

 resetForm(form: NgForm){
  if (form != null) // Reset form if not empty and we add a empty Poll
      form.reset();
  }

  yyyymmdd(date) {  // Date Converter
    let y = date.getFullYear().toString();
    let m = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = d + '/' + m + '/' + y;
    return yyyymmdd;
  }

}
