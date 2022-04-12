import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css']
})
export class Activity2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form=new FormGroup({
    name:new FormGroup({
    first:new FormControl('',Validators.minLength(3)),
    last:new FormControl('',Validators.minLength(3))
  }),
  address:new FormGroup({
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    pin:new FormControl('',Validators.minLength(6))
  })
});
  
get first():any{
  return this.form.get('name.first');
}
get last():any{
  return this.form.get('name.last');
}
get name():any{
  return this.form.get('name');
}
get address():any{
  return this.form.get('address');
}

handleSubmit(): void{
  console.log(this.form.value);
  console.log(this.form.status);
  
}
setPreset(){
  this.name.setvalue({first:'nitesh',last:'yadav'});
}

}
