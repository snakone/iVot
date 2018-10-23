import { Event } from './event';
import { User } from './user';

export class Organization extends User {
  
  id: string;
  token: string;
  icon: string;
  description: string;

   constructor(name:string, email: string, token: string,
               icon: string, description:string, address: string){

       super(name, address, email);
       this.token = token;
       this.icon = icon;
       this.description = description;

   }
}
