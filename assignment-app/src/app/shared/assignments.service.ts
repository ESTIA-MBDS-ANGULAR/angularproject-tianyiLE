import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      nom: 'TP1 sur WebComponents,un lecteur audio amelioré',
      dateDeRendu: new Date('2024-01-25'),
      rendu: true
    },
    {
      nom: 'TP2 sur Angular,un joli gestionnaire de devoirs ',
      dateDeRendu: new Date('2024-01-26'),
      rendu: false
    },
    {
      nom: 'TP3 sur Angular，utilisation du router et de Web Service',
      dateDeRendu: new Date('2024-01-27'),
      rendu: false
    }
  ]
  constructor(private loggingService:LoggingService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments)
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment)

    return of('Assignment service: Assignment ajouté')
  }
  
  updateAssignment(assignment: Assignment): Observable<string> {
    const renduAssignment = this.assignments.find(item => item.nom === assignment.nom)
    if(renduAssignment) {
      renduAssignment.rendu = true
    }
    return of('Assignment service: Assignment modifié!')
  }

  deleteAssignment(assignment: Assignment): Observable<string> {
    let pos = this.assignments.indexOf(assignment)
    this.assignments.splice(pos,1)
    return of('Assignment service: assignment supprimé')
  }
}
