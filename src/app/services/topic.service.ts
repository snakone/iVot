import { Injectable } from '@angular/core';

import { Topic } from '../models/topic';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TopicService {

  topics: Topic[];
  filteredTopics: Topic[];

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  constructor(private http: HttpClient) { }

  getTopics(organizationID, eventID){
    return this.http.get(this.URL_API  + `/${organizationID}/events/${eventID}/topics`).toPromise()
  }

  addTopic(organizationID, eventID, topic){
    return this.http.post(this.URL_API  + `/${organizationID}/events/${eventID}/topics`, topic).toPromise()
  }

  updateTopic(organizationID, eventID, topicID, topic){
    return this.http.put(this.URL_API  + `/${organizationID}/events/${eventID}/topics/${topicID}`, topic).toPromise()
  }

  deleteTopic(organizationID, eventID, topicID){
    return this.http.delete(this.URL_API  + `/${organizationID}/events/${eventID}/topics/${topicID}`).toPromise()
  }

}
