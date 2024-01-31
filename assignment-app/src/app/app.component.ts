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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    AssignmentsComponent,
    AssignmentDetailComponent,
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application de gestion des devoirs arendre(Assignments)';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if(!this.authService.loggedIn){
      this.authService.logIn()
    }else {
      this.authService.logOut()
      //et on renvoie vers la home page
      this.router.navigate(['/home'])
    }
  }
}
