import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import { LoginAssignmentComponent } from './assignments/login-assignment/login-assignment.component';
import { loggedInGuard } from './shared/logged-in.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'path', pathMatch: 'full' },
    { path: 'home', component: AssignmentsComponent },
    { path: 'add', component: AddAssignmentComponent },
    { path: 'login', component: LoginAssignmentComponent },
    { path: 'assignment/:id', component: AssignmentDetailComponent ,canActivate: [loggedInGuard]},
    { 
        path: 'assignment/:id/edit', 
        component: EditAssignmentComponent,
        canActivate: [authGuard]
    },
];
