class Emp{
    private readonly id:number;//it can ne accessed only within class
    private name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    //accessible outside the class
    public display(): void{
        document.write(`<p>Id:${this.id},Name:${this.name}</p>`);
    }
    public getId():number{
        return this .id;
    }
    public setName(name:string):void{
        this.name=name;
    }
}
let e1=new Emp(100,"Nitesh");
let e2=new Emp(200,"Rajan");
e1.display();
e2.display();