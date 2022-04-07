import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-activity-child',
  templateUrl: './activity-child.component.html',
  styleUrls: ['./activity-child.component.css']
})
export class ActivityChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {name:'Laptop',price:60000},
    {name:'Mobile',price:20000},
    {name:'HeadPhone',price:6000}
  ]

  @Output()
  data:EventEmitter<number>=new EventEmitter<number>();
  counter=0;

  @Output()
  price1:EventEmitter<number>=new EventEmitter<number>();
  p1=0;

  add(price:number):void{
    this.p1=this.p1+price;
    this.price1.emit(this.p1)
    this.counter=this.counter+1;
    this.data.emit(this.counter)
  }

  remove(price:number):void{
    this.p1=this.p1-price;
    this.price1.emit(this.p1)
    this.counter=this.counter-1;
    this.data.emit(this.counter)
  }
}
