import { Component, OnInit, Input } from '@angular/core';

import { EntityService } from '../../../../../../../../services/entity.service';

import { CustomPoll } from '../../../../../../../../models/poll';

@Component({
  selector: 'poll-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() customPoll: CustomPoll;

  constructor(private entityService: EntityService) { }

  ngOnInit() {
  }

}
