import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../../services/profile.service';

import { NgForm } from '@angular/forms';

import { CustomPoll } from '../../../../../../../../models/poll';

@Component({
  selector: 'poll-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() customPoll: CustomPoll;
  question: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  vote(form: NgForm){

    console.log(form.value,this.profileService.Auth)
  }

}
