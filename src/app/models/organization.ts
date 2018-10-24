import { Participant } from './participant';

export class Organization extends Participant {

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
