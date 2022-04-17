import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray : any[] = [];
    

  constructor() { }
  
  public getUsers() : any[] {
    return this.userArray;
  }

  public save(obj: any) : void {
    let b=this.userArray.length;
    let a=b+1
    let object={userId:a,name:obj.name,dob:obj.dob,gender:obj.gender,phone:obj.phone,email:obj.email,address:{state:obj.address.state,city:obj.address.city,pin:obj.address.pin}}
    this.userArray.push(object);
  
  }

  public delete(id: number) : void {
    for(let i = 0; i < this.userArray.length; i++) {
      let user = this.userArray[i];
      if(user.userId == id) {
        this.userArray.splice(i, 1);

      }
    }
  }

  public update(id:number):any{
    for(let i=0; i< this.userArray.length; i++){
      let user=this.userArray[i];
      if(user.userId==id){
        return this.userArray[i];
      }
    }
  }

  public updateform(obj:any):void{
    for(let i=0; i< this.userArray.length; i++){
      let user=this.userArray[i];
      if(user.userId==obj.userId){
        user.name=obj.name;
        user.dob=obj.dob;
        user.gender=obj.gender;
        user.phone=obj.phone;
        user.email=obj.email;
        user.address.state=obj.address.state;
        user.address.city=obj.address.city;
        user.address.pin=obj.address.pin;
        console.log('Hello Sumit')
      }
    }
  }
}