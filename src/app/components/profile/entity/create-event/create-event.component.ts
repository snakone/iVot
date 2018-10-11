import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { EntityService } from '../../../../services/entity.service';
import { ToastrService } from 'ngx-toastr';

import { Event } from '../../../../models/event';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  selectedEvent: Event = <Event>{};

  constructor(private toastr: ToastrService,
              private entityService: EntityService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.entityService.getEvents()
      .subscribe(res => {
        this.entityService.events = res as Event[];
      });
  }

  addEvent(form?: NgForm) {

   form.value.eventTime = this.yyyymmdd(form.value.eventTime);
   form.value.entityID = this.entityService.profileID;

   if (form.value.eventID) {
     this.entityService.putEvent(form.value)
       .subscribe(res => {
         this.resetForm(form);
         this.getEvents();
         console.log('Evento editado');
       });
   } else {
     this.entityService.postEvent(form.value)
     .subscribe(res => {
       this.getEvents();
       this.resetForm(form);
        console.log('Evento guardado');
     });
   }

    const newEvent = new Event (form.value.entityID, form.value.eventName,
    form.value.eventTime, form.value.eventDescription);

    this.entityService.events.push(newEvent);
 }

 deleteEvent(id: string, form: NgForm) {
    if (confirm('Estás seguro quieres eliminar este evento?')) {
      this.entityService.deleteEvent(id)
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

 resetForm(addEventForm?: NgForm){
  if (addEventForm != null) // Reset form if not empty and we add a empty Poll
    addEventForm.reset();
    this.selectedEvent = <Event>{}; // Instance a Empty Poll Class
  }

  yyyymmdd(date) {
    date = new Date();
    let y = date.getFullYear().toString();
    let m = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = d + '/' + m + '/' + y;
    return yyyymmdd;
}

}
