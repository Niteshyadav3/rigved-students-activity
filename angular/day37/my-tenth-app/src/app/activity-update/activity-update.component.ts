import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.css']
})
export class ActivityUpdateComponent implements OnInit {

  object:any | undefined=undefined
  constructor(private builder : FormBuilder, private service : UserService) { }

  
  id:FormControl=new FormControl('')
  

  userForm: FormGroup = this.builder.group({
    userId:['',Validators.required],
    name:['', Validators.required],
    dob:['', Validators.required],
    gender:['', Validators.required],
    phone:['',Validators.compose([Validators.minLength(10),Validators.maxLength(10),Validators.required])],
    email:['', Validators.required],
    address:this.builder.group({
      state:['', Validators.required],
      city:['', Validators.required],
      pin:['',Validators.required]
    })
  })

  setuserFormValue(){
    this.userForm.controls['userId'].setValue(this.object.userId);
    this.userForm.controls['name'].setValue(this.object.name);
    this.userForm.controls['dob'].setValue(this.object.dob);
    this.userForm.controls['gendar'].setValue(this.object.gender);
    this.userForm.controls['phone'].setValue(this.object.phone);
    this.userForm.controls['email'].setValue(this.object.email);
    this.userForm.controls['address'].get('state')?.setValue(this.object.address.state);
    this.userForm.controls['address'].get('city')?.setValue(this.object.address.city);
    this.userForm.controls['address'].get('pin')?.setValue(this.object.address.pin);
  }
  
  
  
  updateForm(){
    console.log(this.userForm.value)
    this.service.updateform(this.userForm.value)
  }

  getInfo(){
    this.object=this.service.update(this.id.value)
    console.log(this.object)
  }

  ngOnInit(): void {
    
  }
}