import { Injectable } from '@angular/core';

import { User } from '../models/user';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  selectedUser: User = <User>{};
  users: User[];


  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  constructor(private http: HttpClient) { }

  addUser(organizationID, user){
    return this.http.post(this.URL_API  + `/${organizationID}/users`, user)
  }

  getUsersbyOrganization(organizationID){
    return this.http.get(this.URL_API  + `/${organizationID}/users`)
  }

}
