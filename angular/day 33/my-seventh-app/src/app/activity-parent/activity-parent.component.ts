import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-parent',
  templateUrl: './activity-parent.component.html',
  styleUrls: ['./activity-parent.component.css']
})
export class ActivityParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  quantity : number=0;
  price : number=0;
}
