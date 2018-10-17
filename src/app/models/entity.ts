import { Event } from './event';
import { Bio } from './bio';

export class Entity extends Bio {
  id: string;
  icon: string;
  events: Event[];
  description: string;

   constructor(name:string, email: string, icon:string,
               description:string, address: string){

       super(name, address, email);
       this.icon = icon;
       this.description = description;

   }
}
