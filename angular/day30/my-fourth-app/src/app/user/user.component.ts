import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
     
  constructor() { }

  ngOnInit(): void {
  }
  user = [
    {name : "Alex", gender : "male", address: {state: "KA", city : "BLR"}},
    {name : "Jennifer", gender : "female", address: {state: "MH", city : "MBI"}},
    {name : "Bruce", gender : "male", address: {state: "MH", city : "MBI"}},
    ];
}
