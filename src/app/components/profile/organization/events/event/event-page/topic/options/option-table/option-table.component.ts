import { Component, OnInit, Input } from '@angular/core';

import { Option } from '../../../../../../../../../models/option';
import { Topic } from '../../../../../../../../../models/topic';

import { ProfileService } from '../../../../../../../../../services/profile.service';
import { OptionService } from '../../../../../../../../../services/option.service';

import { ToastrService } from 'ngx-toastr';

import { MatDialog } from '@angular/material';  // Dialog
import { ConfirmComponent } from '../../../../../../../../static/confirm/confirm.component';

@Component({
  selector: 'option-table',
  templateUrl: './option-table.component.html',
  styleUrls: ['./option-table.component.css']
})
export class OptionTableComponent implements OnInit {

  @Input() options: Option[];
  @Input() topic: Topic;

  constructor(private optionService: OptionService,
              private profile: ProfileService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit() {}

  deleteOption(event, optionID: string){
    event.preventDefault();
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {
              this.optionService.deleteOption(this.profile.organizationID, this.profile.eventID,
                                              this.topic.id, optionID)
               .then(res => {
                 this.optionService.getOptions(this.profile.organizationID, this.profile.eventID,
                                               this.topic.id)
                  .then(res => {
                      this.options = res as Option[];
                      this.toastr.error('Opción Eliminada')
                  });
               });
           }  // End of If (result)
      });
  }

}
