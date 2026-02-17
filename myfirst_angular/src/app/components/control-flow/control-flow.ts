import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  selectedCaste: string = " ";

  isStudentActive = signal<boolean>(false);

  changeStatus(value: boolean){
    this.isStudentActive.set(value);
  }

  cityList : string[] = ["Mumbai", "Pune", "Nagpur"];

  studentList: any[] = [
    {name:'Alice', city:'USA', status:true},
    {name:'Bob', city:'LA', status:false},
    {name:'Chris', city:'New York', status:false},
    {name:'Daniel', city:'USA', status:true}
  ]
}
