import { Injectable } from '@angular/core';

import { Poll } from '../models/poll';
import { HttpClient } from '@angular/common/http';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  readonly URL_API = 'http://localhost:8080/api/Event';

  pollList: Poll[]=[{
    pollID: 12345,
    question: "Qué te pareció el evento?",
    options: [{
      optionID: "1",
      option: "Estuvo genial!"
    }, {
      optionID: "2",
      option: "Nada mal"
    }, {
      optionID: "3",
      option: "Mejorable"
    }, {
      optionID: "4",
      option: "No volvería a ir"
    }
      ]
  }];

  events: Event[] = [{
    entityID: "5bc10cbc3385d56f61f6a330",
    eventName: "Google Meet-up Event",
    eventTime: "12/02/2018",
    eventDescription: "Evento de Google. Descubre lo último del gigante de Internet"
  }

  ];

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
