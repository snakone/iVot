import { Event } from './event';
import { Bio } from './bio';

export class Entity extends Bio {
  entityID: string;
  icon: string;
  events: Event[];
  description: string;
  password: string;

   constructor(name:string, address: string, email:string,
               icon:string, description: string, password: string,
               events:Event[]){

       super(name, address, email);
       this.icon = icon;
       this.description = description;
       this.password = password;
       this.events = events;
   }
}
