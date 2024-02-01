import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AuthService } from './shared/auth.service';
import { CommonModule } from '@angular/common';
import { AssignmentsService } from './shared/assignments.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AssignmentsComponent,
    AssignmentDetailComponent,
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  opened: boolean = false
  title = 'Application de gestion des devoirs arendre(Assignments)';
  constructor(public authService: AuthService, private router: Router, private assignmentService: AssignmentsService) {}

  fakeLogin() {
    if(!this.authService.loggedIn){
      this.authService.logIn()
    }else {
      this.authService.logOut()
      //et on renvoie vers la home page
      this.router.navigate(['/home'])
    }
  }

  onClick() {
    console.log(this.assignmentService.getAssignmentsByHttp());
    console.log(this.assignmentService.resultDeHttp);
  }

  onLogout() {
    this.authService.logOut()
    this.router.navigate(['/home'])
  }
}
