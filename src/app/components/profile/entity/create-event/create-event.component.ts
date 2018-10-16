import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { ProfileService } from '../../../../services/profile.service';
import { EventService } from '../../../../services/event.service';
import { ToastrService } from 'ngx-toastr';

import { Event } from '../../../../models/event';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  selectedEvent: Event = <Event>{};

  constructor(private toastr: ToastrService,
              private profileService: ProfileService,
              private eventService: EventService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(res => {
        this.eventService.events = res as Event[];
      });
  }

  addEvent(form?: NgForm) {

   try {
      form.value.eventTime = this.yyyymmdd(form.value.eventTime);
   } catch(err){
      alert('Por favor, Introduce una fecha correcta');
      return false;
   }

   form.value.EventID = this.profileService.Auth;

   if (form.value.eventID) {
     this.eventService.updateEvent(form.value)
       .subscribe(res => {
         this.resetForm(form);
         this.getEvents();
         console.log('Evento editado');
       });
   } else {
     this.eventService.addEvent(form.value)
     .subscribe(res => {
       this.getEvents();
       this.resetForm(form);
        console.log('Evento guardado');
     });
   }

    const newEvent = new Event (form.value.EventID, form.value.eventName,
    form.value.eventTime, form.value.eventDescription);
    this.eventService.events.push(newEvent);
    this.toastr.success('Evento Creado', 'Muy bien!');
    this.dialog.closeAll();
    this.resetForm(form);
 }

 deleteEvent(id: string, form: NgForm) {
    if (confirm('Estás seguro quieres eliminar este evento?')) {
      this.eventService.deleteEvent(id)
        .subscribe(res => {
          this.getEvents();
          this.resetForm(form);
           console.log('Evento eliminado');
        });
    }
  }

  editEvent(event: Event) {
   this.selectedEvent = event;
 }

 resetForm(form: NgForm){
  if (form != null) // Reset form if not empty and we add a empty Poll
      form.reset();
    // this.selectedEvent = <Event>{}; // Instance a Empty Poll Class
  }

  yyyymmdd(date) {
    let y = date.getFullYear().toString();
    let m = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = d + '/' + m + '/' + y;
    return yyyymmdd;
  }

}
