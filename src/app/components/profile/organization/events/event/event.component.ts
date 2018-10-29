import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../../../models/event';

import { MatDialog } from '@angular/material';  // Material Dialog

import { EventService } from '../../../../../services/event.service';
import { ProfileService } from '../../../../../services/profile.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router'; // Router
import { ConfirmComponent } from '../../../../static/confirm/confirm.component';
import { OrganizationService } from '../../../../../services/organization.service';
import { EditEventComponent } from '../../../../static/edit-event/edit-event.component';

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
              private organization: OrganizationService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit() {}

  goTopic(event: Event){  // Go to Organization - > Events - Event Page
    this.router.navigate(['/profile/event/', event.id]);
  }

  editEvent(event: Event){
    const dialogEdit = this.dialog.open(EditEventComponent,{data:{event}})
  }

  deleteEvent(event: Event){
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {
            try {
              let organizationID = this.profileService.organizationID;
                  this.eventService.deleteEvent(event.id, organizationID)
                   .subscribe(res => {
                     this.toastr.info('Evento Eliminado');
                     this.profileService.getEventsByOrganization(organizationID)
                      .then(res => {
                        this.organization.events = res as Event[];
                        this.organization.filteredEvents = res as Event[];
                      });
                   });
            } catch (err) {
              console.error("Necesitas Acceder a tu perfil primero")
              }
        }  // End of If (result)
      });

    }

}
