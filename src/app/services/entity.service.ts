import { Injectable } from '@angular/core';

import { CustomPoll } from '../models/poll';
import { HttpClient } from '@angular/common/http';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  readonly URL_API = 'http://localhost:8080/api/entity';

  isEntity: boolean;
  pollList: CustomPoll[]=[];
  events: Event[]=[];
  profileID: string;

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(this.URL_API);
  }

  postEvent(event: Event) {
    return this.http.post(this.URL_API, event);
  }

  putEvent(event: Event) {
   return this.http.put(this.URL_API + `/${event.entityID}`, event );
 }

 deleteEvent(id: string) {
   return this.http.delete(this.URL_API + `/${id}`);
 }

  loginEntity() {
    return this.isEntity = true;
  }


}
