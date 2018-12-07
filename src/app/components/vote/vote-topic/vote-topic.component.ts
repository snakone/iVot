import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../../models/topic';

@Component({
  selector: 'vote-topic',
  templateUrl: './vote-topic.component.html',
  styleUrls: ['./vote-topic.component.css']
})

export class VoteTopicComponent implements OnInit {

  @Input() topic: Topic;
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openNewOption(){

  }

  editTopic(topic:Topic){

  }

  goResult(topic:Topic){

  }

  deleteTopic(event, topic){
    event.preventDefault();
  }



}
