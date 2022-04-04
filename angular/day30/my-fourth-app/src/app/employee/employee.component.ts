import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
       employee={id:100,name:"Nitesh",salary:35000}
  constructor() { }

  ngOnInit(): void {
  }

}
