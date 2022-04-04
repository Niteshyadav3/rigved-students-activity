import { Component } from "@angular/core";

@Component({
    selector:'user-app',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent{
    name:string="Archana";
    age:number=23
}