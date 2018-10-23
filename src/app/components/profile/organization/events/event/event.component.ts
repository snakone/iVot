import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../../../models/event';

import { AuthService } from '../../../../../services/auth.service';

import { EventService } from '../../../../../services/event.service';
import { ProfileService } from '../../../../../services/profile.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-event',
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
              private toastr: ToastrService) { }

  ngOnInit() {}

  createTopic(event: Event){  // Go to Entity - > Events - Topic Page
    this.router.navigate(['/profile/', event.id]);
  }

  deleteEvent(event: Event){
    try {
      let entityID = this.profileService.organization.id;
        if (confirm("¿Estás Seguro?")){
          this.eventService.deleteEvent(event.id, entityID)
           .subscribe(res => {
               this.auth.getProfile((err, profile) => {
                 this.profileService.checkProfile(profile);
               });
           });
          this.toastr.error('Oh!', 'Evento Eliminado');
        }

    } catch (err) {
      console.log("Necesitas Acceder a tu perfil primero")
    }
  }

}
