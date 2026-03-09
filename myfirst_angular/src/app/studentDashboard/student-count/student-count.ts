import { Component, EventEmitter,  Input, Output} from '@angular/core';
import { Student, StudentFilter} from '../../models/student';
@Component({
  selector: 'app-student-count',
  // imports: [],
  standalone: true,
  templateUrl: './student-count.html',
  styleUrl: './student-count.css',
})
export class StudentCount {

  //Parent -> Child(data)
  @Input() all = 0;
  @Input() male = 0;
  @Input() female = 0;  

  @Input() selected: StudentFilter = "All";

  //Child to Parent(event)

  @Output() selectedChanged = new EventEmitter<StudentFilter>();

  onSelectionChange(value: StudentFilter): void{
    this.selectedChanged.emit(value);
  }

}
