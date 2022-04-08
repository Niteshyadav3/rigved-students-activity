import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(formValue:any):void{
    console.log(formValue);
  }
  
  
}
