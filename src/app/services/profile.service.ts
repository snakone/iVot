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
  email: string; // Auth0 Email
  participant: string;  // Who are you? User or Organization

  organizationID: string;  // To know anytime
  userID: string;  // To know anytime
  eventID: string;  // To know anytime which Event are We
  topicID: string;  // To know anytime which Topic are We

  organization: Organization;  // Auth0 + Backend Organization
  user: User;  // Auth0 + Backend User

  server: boolean = true;
  firstTime: boolean = true;  // To Check Profile only once

  readonly URL_ORGANIZATION_API = 'https://ivotapp.herokuapp.com/organizations';
  readonly URL_USER_API = 'https://ivotapp.herokuapp.com/login';

  constructor(private http: HttpClient,
              private organizationService: OrganizationService) { }

  checkProfile(profile) {
    console.log("comprobando")
    this.participant = profile['http://hello-user'].whoareyou;  // Get user_metadata
    this.token = profile.sub.substring(6);  // Get Auth0 ID
    this.email = profile.email;  // Get Auth0 Email

    if (this.token == '5bc10cbc3385d56f61f6a330' ||  // Admin Assignament
        this.token == '5bc45f88b144eb0173391d71') this.admin = true;

    let mail = {email:profile.email};

    if (this.participant == "Organization"){  // ONLY IF ORGANIZATION //

      this.getOrganizationByEmail(mail)  // Get Organization by Mail
           .then(res => {
             this.organization = res as Organization;
             this.organizationID = this.organization.id;
           }).catch(err => {  // No Organization Mail on DB? -> Organization = null
             this.serverDown(err);
             this.organization = null;
            })
             .then(() => {  // With the Organization, get the Events
               this.getEventsByOrganization(this.organization.id)
                .then(res => {
                  this.organizationService.events = res as Event[];
                  this.organizationService.filteredEvents = res as Event[];
               })
           }).catch(err => {});
      }  // End of If Organization


      if (this.participant == "User"){  // ONLY IF USER //

        this.getUserByEmail(mail)  // Get User by Mail
             .then(res => {
               this.user = res as User;
               console.log(this.user);
               this.userID = this.user.id;
             }).catch(err => {  // No User Mail on DB? -> User = null
               this.user = null;
               this.serverDown(err);
             });
      }  // End of If User
      this.firstTime = false;  // Only Get Profile Once
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

  serverDown(error){
    if (error.status == 409){  // Server Error
      console.log("Hubo un error en el Servidor");
      return false;
    }

    if (error.status == 500 || error.status == 503){  // Server Down
      console.log("Servidor Caido");
      this.server = false;
      return false;
    }

    if (error.status == 404) {  // Organization or user not Registered
      console.log("No registrado")
      return false;
    }
  }

}
