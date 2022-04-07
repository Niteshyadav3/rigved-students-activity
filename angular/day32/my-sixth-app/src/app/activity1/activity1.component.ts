import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css']
})
export class Activity1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students : any =[
    {rollno:10, Name:"nitesh", marks:30},
    {rollno:20, Name:"nilesh", marks:50},
    {rollno:30, Name:"shailesh", marks:40},
    {rollno:40, Name:"jitesh", marks:70},
    {rollno:50, Name:"jayesh", marks:60},
    {rollno:60, Name:"bhavesh", marks:35}
  ]
  apply:boolean=false;
  applycss()
  {
    this.apply = !this.apply
  }
}
