import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})

export class OptionService {

  options: Option[];

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  constructor(private http: HttpClient) { }

  getOptions(organizationID, eventID, topicID){
    return this.http.get(this.URL_API  + `/${organizationID}/events/${eventID}/topics/${topicID}/options`).toPromise()
  }

  addOption(organizationID, eventID, topicID, option){
    return this.http.post(this.URL_API  + `/${organizationID}/events/${eventID}/topics/${topicID}/options`, option).toPromise()
  }

  deleteOption(organizationID, eventID, topicID, optionID){
    return this.http.delete(this.URL_API  + `/${organizationID}/events/${eventID}/topics/${topicID}/options/${optionID}`).toPromise()
  }

}
