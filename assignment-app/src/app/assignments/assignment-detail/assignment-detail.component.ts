import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentsService } from '../../shared/assignments.service';


@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis!: Assignment | null;
  @Output() devoirRenduVert = new EventEmitter()


  constructor(private assignmentsService: AssignmentsService) { }
  ngOnInit(): void {
  }

  onCheckbox() {
    this.devoirRenduVert.emit()
  }

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true
      this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(message => console.log(message))
    }else {
      console.error('Assignment is null, cannot Rendu.');
    }
  }

  onDelete() {
    if (this.assignmentTransmis) { // 确保 assignmentTransmis 不是 null
      this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe(
        message => {
          console.log(message);
          this.assignmentTransmis = null; // 安全地将 assignmentTransmis 设置为 null
        }
      );
    } else {
      console.error('Assignment is null, cannot delete.');
    }
  }


}
