import th from '@angular/common/locales/th';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-event-component',
  imports: [],
  templateUrl: './mouse-event.html',
  styleUrl: './mouse-event.css',
})
export class MouseEventComponent {

  x=0;
  y=0;
  dragging=false;
  
  //  Store the difference between where you clicked inside the box and the box’s actual position, so it doesn’t “jump” when dragging starts.
  offSetX =0;
  offSetY =0;

  startDrag(event: MouseEvent){
    this.dragging=true;

    // Calculates how far inside the box you clicked horizontally and vertically.

    this.offSetX = event.clientX - this.x; //The mouse’s X coordinate relative to the viewport.
    this.offSetY = event.clientY - this.y; //The mouse’s Y coordinate relative to the viewport.
  }

  onDrag(event: MouseEvent){
    if(this.dragging){
      //Updates the box’s left position based on mouse movement.
      this.x = event.clientX - this.offSetX;
      // Updates the box’s top position.
      this.y = event.clientY - this.offSetY;
    }
  }

  stopDrag(){
    this.dragging = false;
  }
}
