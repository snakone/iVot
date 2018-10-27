import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../../../models/event';

import { MatDialog } from '@angular/material';  // Material Dialog

import { AuthService } from '../../../../../services/auth.service';

import { EventService } from '../../../../../services/event.service';
import { ProfileService } from '../../../../../services/profile.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router'; // Router
import { ConfirmComponent } from '../../../../static/confirm/confirm.component';

@Component({
  selector: 'organization-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  @Input() event: Event;
  panelOpenState: boolean;

  constructor(private router: Router,
              private eventService: EventService,
              private profileService: ProfileService,
              private auth: AuthService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit() {}

  createTopic(event: Event){  // Go to Entity - > Events - Topic Page
    this.router.navigate(['/profile/event/', event.id]);
  }

  deleteEvent(event: Event){
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {
            try {
              let entityID = this.profileService.organization.id;
                  this.eventService.deleteEvent(event.id, entityID)
                   .subscribe(res => {
                     this.toastr.error('Evento Eliminado');
                     this.auth.getProfile((err, profile) => {  // After Event Deleted, get the Events again
                         this.profileService.checkProfile(profile);
                       });
                   });
            } catch (err) {
              console.error("Necesitas Acceder a tu perfil primero")
              }
        }  // End of If (result)
      });

    }

}
