import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-activity-store',
  templateUrl: './activity-store.component.html',
  styleUrls: ['./activity-store.component.css']
})
export class ActivityStoreComponent implements OnInit {

 
  constructor(private builder : FormBuilder, private service : UserService) { }

  ngOnInit(): void {
  }
  userForm : FormGroup=this.builder.group({
    userId : [''], name : [''], dob: [''], gender:[''], phone:[''], email:[''], address: this.builder.group({
      state:[''],city:[''],pin:['']
  })
  });
  saveForm() {
    this.service.save(this.userForm.value); 
   
  }
}