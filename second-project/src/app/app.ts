import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [ Navbar, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('second-project');

  onInputChange(event : any){
    // console.log(event); //give object
    console.log(event.data) //give data 
  }
  

  name = '';

  onTestClick(){
    console.log(this.name);
  }

  productName = "IPhone";
  productDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem adipisci aspernatur voluptatum fugit magnam facere perspiciatis qui incidunt beatae officia, deserunt neque libero hic tenetur nemo a odit nesciunt at!";
  productPrice = "$24999";
  productImage = "https://img.freepik.com/premium-photo/phone-with-purple-blue-colors-it_583952-73841.jpg"


  products = {
    name : "IPhone",
    description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem adipisci aspernatur voluptatum fugit magnam facere perspiciatis qui incidunt beatae officia, deserunt neque libero hic tenetur nemo a odit nesciunt at!",
    price : "$24999",
    image : "https://img.freepik.com/premium-photo/phone-with-purple-blue-colors-it_583952-73841.jpg"
  }
}
