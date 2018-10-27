import { Anybody } from './anybody';

export class Organization extends Anybody {

  id: string;
  description: string;

   constructor(name:string, email: string, token: string,
               icon: string, description:string, address: string){

       super(name, email, token, icon, address);
       this.description = description;

   }
}
