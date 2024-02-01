import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
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
import { MatListModule } from '@angular/material/list';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../shared/auth.service';

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
    MatListModule,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'] // 注意是 styleUrls，且是数组
})

export class AssignmentsComponent implements OnInit {

  opened: boolean = false
  formVisible = false;
  title = 'Hello AssignmentsComponent';
  ajouteActive = false
  nomDevoir: string = ''
  dateDeRendu: Date = new Date()
  assignmentSelectionne!: Assignment;
  assignments!: Assignment[]

  constructor(private assignmentsService: AssignmentsService, public authService: AuthService,private router: Router) { }
  ngOnInit(): void {
    this.getAssignments()
  }
  onSubmit() {
    console.log(this.nomDevoir);
    const newAssignment = new Assignment()
    newAssignment.nom = this.nomDevoir
    newAssignment.dateDeRendu = this.dateDeRendu
    newAssignment.rendu = false
    this.assignments.push(newAssignment)
  }
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment
  }

  onAjouterAssignment() {
    this.router.navigate(['/add'])
  }

  getAssignments() {
    this.assignmentsService.getAssignments().subscribe(assignments => this.assignments = assignments)
  }
}
