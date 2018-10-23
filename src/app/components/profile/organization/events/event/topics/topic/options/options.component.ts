import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../../services/profile.service';
import { TopicService } from '../../../../../../../../services/topic.service';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Topic } from '../../../../../../../../models/topic';

@Component({
  selector: 'topic-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  @Input() topic: Topic;
  question: string;

  constructor(private profileService: ProfileService,
              private topicService: TopicService,
              private toastr: ToastrService) { }

  ngOnInit() {}

  vote(form: NgForm){

  }

  deleteTopic($event){
    event.preventDefault();
      if(confirm("¿Estás Seguro?")){
        this.topicService.deleteTopic(this.profileService.organizationID,
                                      this.profileService.eventID, this.topic.id)
         .then(res => {
           this.topicService.getTopics(this.profileService.organizationID,
                                         this.profileService.eventID)
            .then( res => {
              this.topicService.topics = res as Topic[];
            }).then(() => this.toastr.error('Oh!', 'Tópico Eliminado'))
         });
      }
  }

}
