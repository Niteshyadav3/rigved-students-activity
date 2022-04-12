import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css']
})
export class Activity1Component implements OnInit {

  constructor( private builder:FormBuilder) { }

  ngOnInit(): void {
  }
  FormDetail=this.builder.group({
    firstname:[''],
    lastname:[''],
    address : this.builder.group({
      state:[''],
      city:[''],
      pin:['']
    })
  });
  
  handleSubmit(){
  console.log(this.FormDetail.value);
  this.FormDetail.reset({});
    
  }

}
