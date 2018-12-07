import { Injectable } from '@angular/core';

import { Topic } from '../models/topic';
import { HttpClient } from '@angular/common/http';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';
  selectedEvent: Event;
  event: Event;

  constructor(private http: HttpClient) {
    this.selectedEvent = <Event>{};
   }

  getEvents() {
    return this.http.get(this.URL_API);
  }

  getEventbyID(organizationID, eventID){
    return this.http.get(this.URL_API  + `/${organizationID}/events/${eventID}`)
  }

  getEventsByOrganization(id){
    return this.http.get(this.URL_API + `/${id}/events`)
  }

  addEvent(event: Event) {
    return this.http.post(this.URL_API + `/${event.id}/events`, event);  // Event ID = Organization ID
  }

  updateEvent(organizationID, eventID, event) {
    return this.http.put(this.URL_API + `/${organizationID}/events/${eventID}`, event).toPromise();
  }


  deleteEvent(id: string, organizationID) {
   return this.http.delete(this.URL_API + `/${organizationID}/events/${id}`);
 }

}
