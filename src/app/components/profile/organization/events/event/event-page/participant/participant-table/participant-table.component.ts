import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../../../../../../../services/profile.service';
import { ParticipantService } from '../../../../../../../../services/participant.service';

import { Participant } from '../../../../../../../../models/participant';

import { ToastrService } from 'ngx-toastr';

import { MatDialog } from '@angular/material';  // Dialog
import { ConfirmComponent } from '../../../../../../../static/confirm/confirm.component';

@Component({
  selector: 'participant-table',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.css']
})

export class ParticipantTableComponent implements OnInit {

  participants: Participant[];

  constructor(private profile: ProfileService,
              public participant: ParticipantService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit() {

  }

  deleteParticipant(event, participantID: string){
    event.preventDefault();
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {
              this.participant.deleteParticipant(this.profile.organizationID,
                                                 this.profile.eventID, participantID)
                .then(res => {
                    this.participant.getParticipants(this.profile.organizationID,
                                                     this.profile.eventID)
                     .subscribe(res => {
                       this.participant.participants = res as Participant[];
                       this.toastr.error('Participante Eliminado')
                     })
                })
           }  // End of If (result)
      });
  }

}
