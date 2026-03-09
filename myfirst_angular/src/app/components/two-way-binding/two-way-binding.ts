import id from '@angular/common/locales/id';
import ta from '@angular/common/locales/ta';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {

  task: string ="";
  taskList: {id: number, task: string}[] = []

  addTask(){
    this.taskList.push({id: this.taskList.length +1, task:this.task})
    this.task = "";
    console.log(this.taskList);
  }

  deleteTask(id:number){
    this.taskList= this.taskList.filter((item)=>item.id !=id)
  }
  
}
