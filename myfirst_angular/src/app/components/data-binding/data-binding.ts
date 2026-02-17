import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  //string, number, boolean, date

  courseName : string = "Angular 20"
  rollNo : number = 101;
  isEnrolled : boolean = true;
  courseExpiry : Date = new Date();

  minTestLength = 5;

  spanClassName = 'danger';

  constructor(){

    console.log(this.courseName);

    // this.courseName = "Angular 20 Toutorial";

    // console.log(this.courseName);
    
  }
  

  showAlert( pama: string){
    alert("Welcome to Angular! "+ pama+"👋")
  }
  
  onCityChanged(){
    alert("City has been changed! 🤯 ")
  }

  onMouseEnter(){
    console.log("Mouse Enters... ");
    
  }

  addTwoNum(num1: number, num2: number) : number{
     return num1 + num2; 
  }

}
