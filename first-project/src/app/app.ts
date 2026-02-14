import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./first/first";
import { Second } from './second/second';
import { Third } from './third/third';

@Component({
  selector: 'app-root',
  imports: [First, Second, Third],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('first-project');

  getSum() : number{
    return 10+20;
  }

  constructor(){

    const name:string ="Kishna";
    console.log(name);

    const isAvailable:boolean = true;
    console.log(isAvailable);

    const num:number = 31;
    console.log(num);

    const nums:any[] = [1,2,3,4,5,6,7,8,9,10];
    console.log(nums);

    const languages:string[] = ['Angular', 'React', 'Vue'];
    console.log(languages);

    const person:any[] = ['Kishna', 23, 'Ambernath'];
    console.log(person);    
    
    console.log(this.getSum());
  }
}
