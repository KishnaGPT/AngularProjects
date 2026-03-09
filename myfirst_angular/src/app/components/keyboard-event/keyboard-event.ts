import el from '@angular/common/locales/el';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-keyboard-event-component',
  imports: [],
  templateUrl: './keyboard-event.html',
  styleUrl: './keyboard-event.css',
})
export class KeyboardEventComponent {

  login(){
    alert("Login function triggered via Enter key");
  }

  searchText = "";

  searchProduct(event: KeyboardEvent){
    //adding type assertion to handle the null check -> it is a input element
    this.searchText = (event.target as HTMLInputElement).value;
  }

  preventNumbers(event: KeyboardEvent){
    const input = event.key;
    //preesed key is number number or a 
    if(!isNaN(Number(input)) && input !== ' '){
      event.preventDefault(); //stops it
    }
  }

  preventAlpha(event: KeyboardEvent){

    const input = event.key;

    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Enter'
    ];

    if(allowedKeys.includes(input)){
      return
    }

    //pressed key is alphabet
    if(isNaN(Number(input))){
      event.preventDefault(); //stops it
    }

  }

  x=0;
  y=0;

  moveBox(event: KeyboardEvent){
    if(event.key === 'ArrowRight'){
      this.x+=10;
    }
    else if(event.key ==='ArrowLeft'){
      this.x-=10;
    }
    else if(event.key === 'ArrowUp'){
      this.y-=10;
    }
    else if(event.key === 'ArrowDown'){
      this.y+=10;
    }
  }

 



}
