import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tailwind');

  num = 0;

  onClickMe(){
    console.log("Button has been click!");
    this.num += 1;
  }

  onClickNot(){
    console.log("Button has been click!");
    this.num = this.num-1;
  }

  

}
