import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Organization } from '../models/organization';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  admin: boolean = false;
  token: string;  // Auth0 Token
  participant: string;  // Who are you? User or Organization
  organizationID: string;
  eventID: string;
  events: Event[];
  organization: Organization;  // Auth0 + Backend Organization

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  constructor(private http: HttpClient) { }

  checkProfile(profile){
    this.participant = profile['http://hello-user'].whoareyou;  // Get user_metadata
    this.token = profile.sub.substring(6);

    if (this.token == '5bc10cbc3385d56f61f6a330' ||  // Admin Assignament
        this.token == '5bc45f88b144eb0173391d71') this.admin = true;

    let mail = {email: profile.email};

    this.getOrganizationByEmail(mail)  // Get Organization by Mail
         .then(res => {
           this.organization = res as Organization;
           this.organizationID = this.organization.id
         }).catch(err => {  // No Organization Mail on BD? -> Organization = null
           this.organization = null;
           console.error("Necesitas registar una Entidad para ver tu perfil")
         })
         .then(() => {  // With the Organization, get the Events
           this.getEventsByOrganization(this.organization.id)
            .then(res => {
             this.events = res as Event[];
           })
         }).catch(err => {});
  }

  getOrganizationByEmail(email){
    return this.http.post(this.URL_API + "/login", email).toPromise()
  }

  getEventsByOrganization(id){
    return this.http.get(this.URL_API + `/${id}/events`).toPromise()
  }

}
