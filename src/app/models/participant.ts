export class Participant {

  assignedVotes: number;
  representation: boolean;
  userEmail: string;

   constructor(assignedVotes: number, representation: boolean,
               userEmail: string){

              this.assignedVotes = assignedVotes;
              this.representation = representation;
              this.userEmail = userEmail;

   }
}
