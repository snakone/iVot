import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Organization } from '../models/organization';
import { User } from '../models/user';
import { OrganizationService } from '../services/organization.service';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  admin: boolean = false;
  token: string;  // Auth0 Token
  participant: string;  // Who are you? User or Organization
  organizationID: string;  // To know anytime
  userID: string;  // To know anytime
  eventID: string;  // To know anytime which Event are We
  topicID: string;  // To know anytime which Topic are We
  organization: Organization;  // Auth0 + Backend Organization
  user: User;  // Auth0 + Backend User

  readonly URL_ORGANIZATION_API = 'https://ivotapp.herokuapp.com/organizations';
  readonly URL_USER_API = 'https://ivotapp.herokuapp.com/login';

  constructor(private http: HttpClient,
              private organizationService: OrganizationService) { }

  checkProfile(profile){
    this.participant = profile['http://hello-user'].whoareyou;  // Get user_metadata
    this.token = profile.sub.substring(6);

    if (this.token == '5bc10cbc3385d56f61f6a330' ||  // Admin Assignament
        this.token == '5bc45f88b144eb0173391d71') this.admin = true;

    let mail = {email: profile.email};

    if (this.participant == "Organization"){  // Only If Organization
      this.getOrganizationByEmail(mail)  // Get Organization by Mail
           .then(res => {
             this.organization = res as Organization;
             this.organizationID = this.organization.id;
           }).catch(err => {  // No Organization Mail on DB? -> Organization = null
             this.organization = null;
             console.error("Necesitas registar una Organización para ver tu perfil")
           })
           .then(() => {  // With the Organization, get the Events
             this.getEventsByOrganization(this.organization.id)
              .then(res => {
                this.organizationService.events = res as Event[];
             })
           }).catch(err => {});
      }  // End of If Organization

      if (this.participant == "User"){  // Only If User
        this.getUserByEmail(mail)  // Get User by Mail
             .then(res => {
               this.user = res as User;
               console.log(this.user);
               this.userID = this.user.id;
             }).catch(err => {  // No User Mail on DB? -> User = null
               this.user = null;
               console.error(err)
             });
        }  // End of If User
  }

  getOrganizationByEmail(email){
    return this.http.post(this.URL_ORGANIZATION_API + "/login", email).toPromise()
  }

  getEventsByOrganization(id){
    return this.http.get(this.URL_ORGANIZATION_API + `/${id}/events`).toPromise()
  }

  getUserByEmail(email){
    return this.http.post(this.URL_USER_API, email).toPromise()
  }

}
