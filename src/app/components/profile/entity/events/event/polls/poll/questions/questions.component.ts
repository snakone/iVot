import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../../services/profile.service';
import { EventService } from '../../../../../../../../services/event.service';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Poll } from '../../../../../../../../models/poll';

@Component({
  selector: 'poll-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() poll: Poll;
  @Input() i: any;
  question: string;

  constructor(private profileService: ProfileService,
              private eventService: EventService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  vote(form: NgForm){
    this.toastr.info(`${this.poll.options[form.value.option].id}`,
                     `${this.poll.options[form.value.option].option}`);
  }

  deletePoll($event, i, form: NgForm){
    event.preventDefault();
      if(confirm("Are You sure?")){
        this.eventService.pollList = this.eventService.pollList.filter( x => {
          return x.question != this.eventService.pollList[i].question;
        })
      }
  }

}
