import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent {


  slides = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg',
      title: 'CCS Receives Sandhills Region\'s Science of Reading True Trailblazer Award',
      description: 'CCS Receives Sandhills Region\'s Science of Reading True Trailblazer Award'
    },
    {
      imageUrl: 'https://image.shutterstock.com/image-photo/dawn-mountains-wide-green-meadow-250nw-1717881349.jpg',
      title: 'Board of Education Committee Meeting',
      description: 'Cumberland County Board of Education COMMITTEE Meetings Announcement'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg',
      title: '\'Need to Know\' Update',
      description: '\'Need to Know\' Update for the Week of September 29, 2024'
    }
  ];

  currentIndex = 0;

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }

}