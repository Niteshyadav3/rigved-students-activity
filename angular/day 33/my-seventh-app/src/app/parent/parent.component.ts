import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   username : string ="Nitesh";
   usernameArray :string[] = ["Rohit","Yash","Aman","Gaurav"];
   num : number = 0;
}
