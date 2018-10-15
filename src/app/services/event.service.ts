import { Injectable } from '@angular/core';

import { Poll } from '../models/poll';
import { HttpClient } from '@angular/common/http';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  readonly URL_API = 'http://localhost:8080/api/Event';

  pollList: Poll[]=[];
  events: Event[]=[];
  selectedEvent: Event;

  constructor(private http: HttpClient) {
    this.selectedEvent = <Event>{};
   }

  getEvents() {
    return this.http.get(this.URL_API);
  }

  addEvent(event: Event) {
    return this.http.post(this.URL_API, event);
  }

  updateEvent(event: Event) {
   return this.http.put(this.URL_API + `/${event.entityID}`, event );
 }

  deleteEvent(id: string) {
   return this.http.delete(this.URL_API + `/${id}`);
 }

}
