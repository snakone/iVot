import { Anybody } from './anybody';

export class User extends Anybody {

    id: string;
    lastName: string;
    organization: string;

    constructor(name:string, lastName: string, icon: string,
                token: string, address: string, email: string,
                organization: string){

      super(name, email, token, icon, address);
      this.lastName = lastName;
      this.organization = organization;

    }
}
