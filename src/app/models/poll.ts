import { Option } from './option';

export class Poll {

  pollID: number;
  question: string;
  options: Option[];


  constructor(question: string, options: Option[]){
              this.question = question;
              this.options = options;
              }
}
