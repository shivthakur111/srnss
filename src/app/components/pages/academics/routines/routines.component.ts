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


  zoom = 1.0; // Initial zoom level

  zoomIn() {
    this.zoom += 0.25; // Increase zoom by 0.25
  }

  zoomOut() {
    if (this.zoom > 0.25) {
      this.zoom -= 0.25; // Decrease zoom by 0.25
    }
  }

  resetZoom() {
    this.zoom = 1.0; // Reset zoom to default (1.0)
  }

  // Update the zoom based on input field changes
  updateZoom(value: number) {
    this.zoom = value;
  }
}
