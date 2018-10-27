import { Injectable } from '@angular/core';

import { Topic } from '../models/topic';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TopicService {

  topics: Topic[];

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  constructor(private http: HttpClient) { }

  getEventbyID(organizationID, eventID){
    return this.http.get(this.URL_API  + `/${organizationID}/events/${eventID}`)
  }

  getTopics(organizationID, eventID){
    return this.http.get(this.URL_API  + `/${organizationID}/events/${eventID}/topics`).toPromise()
  }

  addTopic(organizationID, eventID, topic){
    return this.http.post(this.URL_API  + `/${organizationID}/events/${eventID}/topics` , topic).toPromise()
  }

  deleteTopic(organizationID, eventID, id){
    return this.http.delete(this.URL_API  + `/${organizationID}/events/${eventID}/topics/${id}`).toPromise()
  }

}
