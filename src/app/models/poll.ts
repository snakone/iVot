export class CustomPoll {

  pollID: number;
  question: string;
  options: string[];


  constructor(question: string, options: string[]){

              this.question = question;
              this.options = options;
              }
}
