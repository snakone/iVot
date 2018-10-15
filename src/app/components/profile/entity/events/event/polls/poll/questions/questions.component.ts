import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../../services/profile.service';

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
  question: string;

  constructor(private profileService: ProfileService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  vote(form: NgForm){
    let i = form.value.options;
    this.toastr.info(`${form.value.options}`, `${this.poll.options[i-1]}`);
  }

}
