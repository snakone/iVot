import { Component, OnInit } from '@angular/core';

// Services
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../../services/profile.service';
import { ParticipantService } from '../../../services/participant.service';
import { UserService } from '../../../services/user.service';
// Models
import { Participant } from '../../../models/participant';
import { User } from '../../../models/user';
// Others
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';  // Dialog


@Component({
  selector: 'invite-participant',
  templateUrl: './invite-participant.component.html',
  styleUrls: ['./invite-participant.component.css']
})

export class InviteParticipantComponent implements OnInit {

selectedParticipant: Participant = <Participant>{};
users: User[];

  constructor(private toastr: ToastrService,
              public dialog: MatDialog,
              private participant: ParticipantService,
              private user: UserService,
              private profile: ProfileService) { }

  ngOnInit() {
    this.getUsers();
  }

  onSubmit(form?: NgForm) {
    let eventID = this.profile.eventID;
    let organizationID = this.profile.organizationID;

    if (!form.value.userEmail.includes('@')){
      alert("Introduce un Email correcto");
      return false;
    }

    this.participant.inviteParticipant(form.value)  // Invite Participant by sending Email

    this.participant.addParticipant(organizationID, eventID, form.value)  // Add Participant to MYSQL
     .then(res => {
         this.toastr.success('Participante Invitado');
         this.dialog.closeAll();
     }).catch(err => {
          if (err.status == 409) {
            alert("Este Participante ya está invitado")
            }
        }).then(() => {
              this.participant.getParticipants(organizationID, eventID)
              .subscribe(res => {
                this.participant.participants = res as Participant[];
              })
          });
    }

    getUsers(){
      let organizationID = this.profile.organizationID;
      this.user.getUsersbyOrganization(organizationID)
       .subscribe(res => {
         this.users = res as User[];
       })
    }


}
