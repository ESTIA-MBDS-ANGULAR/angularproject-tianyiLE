import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RenduDirective } from '../shared/rendu.directive';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'] // 注意是 styleUrls，且是数组
})
export class AssignmentsComponent {
  title = 'Hello AssignmentsComponent';

  assignments = [
    {
      nom : 'TP Angular 1',
      dateDeRendu : new Date('2024-01-25'),
      rendu : true
    },
    {
      nom : 'TP Angular 2',
      dateDeRendu : new Date('2024-01-26'),
      rendu : false
    },
    {
      nom : 'TP Angular 3',
      dateDeRendu : new Date('2024-01-27'),
      rendu : true
    }
    
  ]
}
