import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-title',
  templateUrl: './top-title.component.html',
  styleUrls: ['./top-title.component.css']
})
export class TopTitleComponent implements OnInit {

  gridTitle: string;
  gridsubTitle: string;

  constructor() {

    this.gridTitle = "Sharing Votes";
    this.gridsubTitle = "La votación, hecha fácil";
  }

  ngOnInit() {
  }

}
