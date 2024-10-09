import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  events = [
    {
      title: 'Happy Dashain from SRNSS',
      description: 'Wishing our entire Lincoln community and all families across Nepal a joyous and prosperous Dashain...',
      image: 'https://www.adventurehimalayacircuit.com/blog/wp-content/uploads/2019/10/Dashain-Festival.jpg', // Replace with the path to your image
      date: '04 October, 2024',
    },
    {
      title: 'Happy Dashain from SRNSS',
      description: 'Wishing our entire Lincoln community and all families across Nepal a joyous and prosperous Dashain...',
      image: 'https://www.adventurehimalayacircuit.com/blog/wp-content/uploads/2019/10/Dashain-Festival.jpg', // Replace with the path to your image
      date: '04 October, 2024',
    },
    {
      title: 'Happy Dashain from SRNSS',
      description: 'Wishing our entire Lincoln community and all families across Nepal a joyous and prosperous Dashain...',
      image: 'https://www.adventurehimalayacircuit.com/blog/wp-content/uploads/2019/10/Dashain-Festival.jpg', // Replace with the path to your image
      date: '04 October, 2024',
    },
    {
      title: 'Happy Dashain from SRNSS',
      description: 'Wishing our entire Lincoln community and all families across Nepal a joyous and prosperous Dashain...',
      image: 'https://www.adventurehimalayacircuit.com/blog/wp-content/uploads/2019/10/Dashain-Festival.jpg', // Replace with the path to your image
      date: '04 October, 2024',
    },
  ];


  studentsCount: number = 0;
  teachersCount: number = 0;
  excellenceCount: number = 0;
  programsCount: number = 0;

  // Object to hold target counts
  private targetCounts = {
    students: 1250,
    teachers: 42,
    excellence: 76,
    programs: 4
  };

  // OnInit lifecycle hook to trigger the count-up on load
  ngOnInit(): void {
    this.startCountUp('studentsCount', this.targetCounts.students);
    this.startCountUp('teachersCount', this.targetCounts.teachers);
    this.startCountUp('excellenceCount', this.targetCounts.excellence);
    this.startCountUp('programsCount', this.targetCounts.programs);
  }

  // Function to start counting up the number
  private startCountUp(counterKey: 'studentsCount' | 'teachersCount' | 'excellenceCount' | 'programsCount', target: number): void {
    let current = 0;
    const increment = target / 100;  // Customize to control counting speed

    const updateCount = () => {
      if (current < target) {
        current += increment;
        this[counterKey] = Math.ceil(current); // Safely assigning a number to a number property
        setTimeout(updateCount, 20);  // Controls the speed of counting
      } else {
        this[counterKey] = target; // Ensures the final number is exact
      }
    };

    updateCount();
  }
  
}
