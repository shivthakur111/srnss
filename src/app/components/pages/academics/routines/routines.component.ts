import { Component } from '@angular/core';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent {

  primaryRoutine = {
    issueDate: 'October 10, 2024',
    pdfLink: 'assets/routines/primary.pdf'
  };

  lowerSecondaryRoutine = {
    issueDate: 'October 12, 2024',
    pdfLink: 'assets/routines/lower-secondary.pdf'
  };

  secondary1Routine = {
    issueDate: 'October 15, 2024',
    pdfLink: 'assets/routines/secondary1.pdf'
  };

  secondary2Routine = {
    issueDate: 'October 15, 2024',
    pdfLink: 'assets/routines/secondary2.pdf'
  };
}
