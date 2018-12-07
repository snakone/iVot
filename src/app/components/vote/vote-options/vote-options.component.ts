import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../../models/topic';


@Component({
  selector: 'vote-options',
  templateUrl: './vote-options.component.html',
  styleUrls: ['./vote-options.component.css']
})

export class VoteOptionsComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
