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

  //分页显示需要的属性properties
  page: number = 1;
  limit: number = 10;
  totalDocs!: number;
  totalPages!: number;
  nextPage!: number;
  prevPage!: number;
  hasPrevPage!: boolean;
  hasNextPage!: boolean;


  constructor(private assignmentsService: AssignmentsService, public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    // this.getAssignments()
    this.assignmentsService.getAssignmentsPagine(this.page, this.limit).subscribe(
      data => {
        this.assignments = data.docs;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
        console.log("Données recues");
      }
    )
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
    this.assignmentsService.getAssignmentsByHttp().subscribe(assignments => {
      this.assignments = assignments; console.log(this.assignments);
    })
  }

  peuplerBD() {
    // version naive et simple
    //this.assignmentsService.peuplerBD();
    // meilleure version :
    this.assignmentsService.peuplerBDavecForkJoin()
      .subscribe(() => {
        console.log("LA BD A ETE PEUPLEE, TOUS LES ASSIGNMENTSAJOUTES, ON RE-AFFICHE LA LISTE");
        // replaceUrl = true = force le refresh, même si
        // on est déjà sur la page d’accueil
        // Marche plus avec la dernière version d’angular
        //this.router.navigate(["/home"], {replaceUrl:true});
        // ceci marche….
        window.location.reload();
      }
      )
  }
}
