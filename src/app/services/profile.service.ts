import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  admin: boolean = false;
  Auth: string;

  constructor() { }

  checkProfile(profile){
    this.Auth = profile.sub.substring(6);
    if (this.Auth == '5bc10cbc3385d56f61f6a330' ||
        this.Auth == '5bc45f88b144eb0173391d71') this.admin = true;
  }
}
