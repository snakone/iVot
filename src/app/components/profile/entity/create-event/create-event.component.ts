import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { ProfileService } from '../../../../services/profile.service';
import { EventService } from '../../../../services/event.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

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
              public profileService: ProfileService,
              private eventService: EventService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {}

  addEvent(form?: NgForm) {

   try {
      form.value.eventDate = this.yyyymmdd(form.value.eventDate);
   } catch(err){
      alert('Por favor, Introduce una fecha correcta');
      return false;
   }
 {
     this.eventService.addEvent(form.value)
     .subscribe(res => {
       this.resetForm(form);
        console.log('Evento guardado');
     });
   }

    this.toastr.success('Evento Creado', 'Muy bien!');
    this.dialog.closeAll();
    this.resetForm(form);
    this.router.navigate(['/home']);
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
