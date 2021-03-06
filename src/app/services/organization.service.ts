import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Organization } from '../models/organization';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  events: Event[];
  filteredEvents: Event[];
  selectedOrganization: Organization;

  constructor(private http: HttpClient) {
    this.selectedOrganization = <Organization>{};
   }

  getOrganizations() {
    return this.http.get(this.URL_API);
  }

  addOrganization(organization: Organization) {
    return this.http.post(this.URL_API, organization);
  }

  updateOrganization(organization: Organization) {
   return this.http.put(this.URL_API + `/${organization.id}`, organization);
 }

  deleteOrganization(id: string) {
   return this.http.delete(this.URL_API + `/${id}`);
 }

}
