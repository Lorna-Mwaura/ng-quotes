import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[] =[
  new Quote(1,"Your journey begins when you take the chance to get up and live fully","Oprah Winfrey","Lona Wanjiku",0,0,new Date(2022,3,14)),
  new Quote(2,"Don't let the scale define you! Be active Eat healthy,Be Happy","Juice Wrld","Lona Wanjiku",0,0,new Date(2019,6,9)),
  new Quote(3,"It always seems impossible until it's done","Nelson Mandela","Lona Wanjiku",0,0, new Date(2019,0,18))

];
addNewQuote(quote:Quote){
  let qouteLength = this.quotes.length;
    quote.id = qouteLength+1;
  this.quotes.push(quote)
}
arr:number[] = this.quotes.map(quotes=>quotes.upvotes)
highest = Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
