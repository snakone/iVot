import { Event } from './event';
import { Bio } from './bio';

export class Entity extends Bio {
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
