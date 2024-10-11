import { Component } from '@angular/core';

@Component({
  selector: 'app-syllabus-curriculum',
  templateUrl: './syllabus-curriculum.component.html',
  styleUrls: ['./syllabus-curriculum.component.css']

  })
  export class SyllabusCurriculumComponent {
    selectedClass: string = '';
    classOptions: string[] = ['Primary', 'Lower Secondary', 'Secondary'];
  
    // Define the type for curriculumData and filteredCurriculum
    curriculumData: { class: string, title: string, link: string }[] = [
      {
        class: 'Primary',
        title: 'Primary Syllabus',
        link: '/assets/downloads/primary-syllabus.pdf'
      },
      {
        class: 'Primary',
        title: 'Primary Curriculum',
        link: '/assets/downloads/primary-curriculum.pdf'
      },
      {
        class: 'Lower Secondary',
        title: 'Lower Secondary Syllabus',
        link: '/assets/downloads/lower-secondary-syllabus.pdf'
      },
      {
        class: 'Lower Secondary',
        title: 'Lower Secondary Curriculum',
        link: '/assets/downloads/lower-secondary-curriculum.pdf'
      },
      {
        class: 'Secondary',
        title: 'Secondary Syllabus',
        link: '/assets/downloads/secondary-syllabus.pdf'
      },
      {
        class: 'Secondary',
        title: 'Secondary Curriculum',
        link: '/assets/downloads/secondary-curriculum.pdf'
      }
    ];
  
    // Correctly define the type here
    filteredCurriculum: { class: string, title: string, link: string }[] = [];
  
    constructor() {
      this.filterByClass(); // Initialize with default class filter
    }
  
    filterByClass() {
      if (this.selectedClass) {
        this.filteredCurriculum = this.curriculumData.filter(item => item.class === this.selectedClass);
      } else {
        this.filteredCurriculum = [];
      }
    }
  }
  