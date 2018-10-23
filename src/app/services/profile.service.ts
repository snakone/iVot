import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Entity } from '../models/entity';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  admin: boolean = false;
  token: string;
  events: Event[];
  organization: Entity;

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  constructor(private http: HttpClient) { }

  checkProfile(profile){
    this.token = profile.sub.substring(6);

    let mail = {email: profile.email};

    this.getOrganizationByEmail(mail)
         .then(res => this.organization = res as Entity).catch(err => {
           this.organization = null;
           console.error("Necesitas registar una Entidad para ver tu perfil")
         })
         .then(() => {
           this.getEventsByOrganization(this.organization.id)
            .then(res => {
             this.events = res as Event[];
           })
         }).catch(err => {});

    if (this.token == '5bc10cbc3385d56f61f6a330' ||
        this.token == '5bc45f88b144eb0173391d71') this.admin = true;
  }

  getOrganizationByEmail(email){
    return this.http.post(this.URL_API + "/login", email).toPromise()
  }

  getEventsByOrganization(id){
    return this.http.get(this.URL_API + `/${id}/events`).toPromise()
  }

}

// Idea: tanto "Entidad" como "User" se registran con "Auth0" lo que entidad "manualmente"
// por el "administrador"; Con el "ID" de "Auth0" cuando registramos una "Entidad",
// se crea una "lista" "manualmente" de los "ID" de "Auth0" que sean "Entidades";
// Una vez con la lista, asignar que tipo es sí "Entidad" o "User" y mostrar diferentes partes
// según lo que seas; El perfil de "Entidad", sus "Eventos" y poder "crear" más "Eventos"
// en el caso de ser una "Entidad", y una "lista" de los "Eventos" que el usuario ha sido
// "invitado" si somos "User".

// Es una manera un poco brusca de hacerlo pero así nos evitamos hacer dos sistemas
// de login por separado y nos olvidamos de guardar contraseñas. Al fin y al cabo,
// el "servidor" no sabe quiénes somos, él sólo recibe datos. El "FrontEnd" se encarga
// de "llamar" a cada cúal en su momento.
