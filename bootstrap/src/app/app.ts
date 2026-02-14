import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Cards } from "./cards/cards";

@Component({
  selector: 'app-root',
  imports: [Navbar, Cards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bootstrap');
}
