import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})

export class ParticipantService {

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  participants: Participant[];

  constructor(private http: HttpClient) { }

  inviteParticipant(participant: Participant){
    console.log(participant)
  }

  addParticipant(organizationID, eventID, participant){
    return this.http.post(this.URL_API  +
      `/${organizationID}/events/${eventID}/participant`, participant).toPromise()
  }

  getParticipants(organizationID, eventID){
    return this.http.get(this.URL_API  + `/${organizationID}/events/${eventID}/participant`)
  }

  deleteParticipant(organizationID, eventID, id){
    return this.http.delete(this.URL_API  + `/${organizationID}/events/${eventID}/participant/${id}`).toPromise()
  }

}
