import { Component } from '@angular/core';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent {
  faculties = [
    {
      name: 'Computer Engineering (Grade 9-12)',
      description: 'Provides advanced courses in programming, networking, and hardware.',
      extraInfo: 'Courses offered include AI, Cybersecurity, and more. Labs are equipped with the latest technology.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBtJdUlD5rAXBJwDfbxonjNqqHbLXwc1mw&s',
      showDetails: false
    },
    {
      name: 'Science',
      description: 'Offers subjects such as physics, chemistry, biology, and mathematics.',
      extraInfo: 'Our labs are fully equipped, and students participate in national-level science fairs.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBtJdUlD5rAXBJwDfbxonjNqqHbLXwc1mw&s',
      showDetails: false
    },
    {
      name: 'Commerce',
      description: 'Focuses on economics, business management, and accounting.',
      extraInfo: 'Students are involved in real-world business case studies and market analysis.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBtJdUlD5rAXBJwDfbxonjNqqHbLXwc1mw&s',
      showDetails: false
    },
    {
      name: 'Education',
      description: 'Offers teacher training programs and educational psychology courses.',
      extraInfo: 'Our education program prepares students for leadership roles in schools.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBtJdUlD5rAXBJwDfbxonjNqqHbLXwc1mw&s',
      showDetails: false
    }
  ];

  toggleDetails(faculty: any) {
    faculty.showDetails = !faculty.showDetails;
  }
}
