import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; // Routes
import { AuthService } from '../../services/auth.service';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../models/topic';
import { ParticipantService } from '../../services/participant.service';
import { Participant } from '../../models/participant';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private topicService: TopicService,
              private participantService: ParticipantService,
              private auth: AuthService) { }

  onlyUsers: boolean;
  whoAreYou: string;
  email: string;
  topics: Topic[];
  participants: Participant[];
  participant: any;

  ngOnInit() {
    let params = this.activeRoute.snapshot.params; // Get the Event ID from URL
    this.checkOnlyUsers();
    this.getTopicsByEvent(params);
    this.getParticipantsByEvent(params);
  }


  checkOnlyUsers(){
    if (this.auth.isAuthenticated()) {  // Check participant Profile
        this.auth.getProfile((err, profile) => {
          this.whoAreYou = profile['http://hello-user'].whoareyou;  // Get user_metadata
          this.whoAreYou == "Organization" ? this.onlyUsers = false : this.onlyUsers = true;
          this.email = profile.email;
        });
      }
  }

  getTopicsByEvent(params){
    this.topicService.getTopics(params.organizationID, params.eventID)
     .then(res => {
       this.topics = res as Topic[];
     })
       .catch(err => {
         console.log("Hubo un error al conseguir los tópicos")
       })
  }

  getParticipantsByEvent(params){
    this.participantService.getParticipants(params.organizationID, params.eventID)
     .subscribe(res => {
       this.participants = res as Participant[];

       let participante = this.participants.filter(x => x.userEmail == this.email);
       if (participante) console.log("Estás Invitado!"); else console.log("NO Estás Invitado!")
     })
  }

}
