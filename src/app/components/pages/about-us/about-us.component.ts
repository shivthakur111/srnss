
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  teamMembers = [
    { name: 'Premendra Kumar Nidhi', position: 'Principal', image: 'assets/headsir.jpg' },
    { name: 'Ashok Kumar Labh', position: 'Vice Principal', image: 'assets/headsir.jpg' },
    { name: 'Suresh Kumar Yadav', position: 'Vice Principal', image: 'assets/headsir.jpg' },
    { name: 'Suresh Kumar Thakur', position: 'Administrative', image: 'assets/headsir.jpg' } 
  ];

  constructor() { }

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sections = document.querySelectorAll('.animate-section');
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < triggerPoint) {
        section.classList.add('active');
      }
    });
  }
}
