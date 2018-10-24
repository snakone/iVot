import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  events: Event[]=[];
  organizationList: Organization[];
  selectedOrganization: Organization;

  constructor(private http: HttpClient) {
    this.selectedOrganization = <Organization>{};
   }

  getEntities() {
    return this.http.get(this.URL_API);
  }

  addOrganization(organization: Organization) {
    let newOrganization = new Organization(organization.name, organization.email, organization.token,
                               organization.icon, organization.description, organization.address);

    return this.http.post(this.URL_API, newOrganization);
  }

  updateOrganization(organization: Organization) {
   return this.http.put(this.URL_API + `/${organization.id}`, organization);
 }

  deleteOrganization(id: string) {
   return this.http.delete(this.URL_API + `/${id}`);
 }

}
