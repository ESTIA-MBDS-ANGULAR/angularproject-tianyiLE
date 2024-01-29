import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RenduDirective } from '../shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [
    CommonModule,
    RenduDirective,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'] // 注意是 styleUrls，且是数组
})
export class AssignmentsComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.ajouteActive = true
    }, 2000);
  }
  opened: boolean = false
  title = 'Hello AssignmentsComponent';
  ajouteActive = false
  nomDevoir: string = ''
  dateDeRendu: Date = new Date()
  assignments: Assignment[] = [
    {
      nom: 'TP Angular 1',
      dateDeRendu: new Date('2024-01-25'),
      rendu: true
    },
    {
      nom: 'TP Angular 2',
      dateDeRendu: new Date('2024-01-26'),
      rendu: false
    },
    {
      nom: 'TP Angular 3',
      dateDeRendu: new Date('2024-01-27'),
      rendu: true
    }
  ]
  onSubmit() {
    console.log(this.nomDevoir);
    const newAssignment = new Assignment()
    newAssignment.nom = this.nomDevoir
    newAssignment.dateDeRendu = this.dateDeRendu
    newAssignment.rendu = false
    this.assignments.push(newAssignment)
  }
}
