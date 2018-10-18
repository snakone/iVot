import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  admin: boolean = true;
  Auth: string;

  constructor() { }

  checkProfile(profile){
    this.Auth = profile.sub.substring(6);
    if (this.Auth == '5bc10cbc3385d56f61f6a330' ||
        this.Auth == '5bc45f88b144eb0173391d71') this.admin = true;
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
