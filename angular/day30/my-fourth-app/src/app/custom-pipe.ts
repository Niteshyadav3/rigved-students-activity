import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    //name:'User Table'
    name:'salutation'
})
export class customPipe implements PipeTransform{
    //arg2 we are not going to use here
   // transform(arg1:string) {
      // return arg1.length; 
    transform(name:string,gender:string):string {
        if(gender === "Male"){
            return "Mr." +name;
        }else{
            return "Ms." +name;
        }
    
    }
}