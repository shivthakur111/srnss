import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  items = [
    {
      image: 'https://i.ibb.co/qCkd9jS/img1.jpg',
    },
    {
      image: 'https://i.ibb.co/jrRb11q/img2.jpg',
    },
    {
      image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
    },
    {
      image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
    }
  ];

  activeIndex = 0;

  ngOnInit(): void {
    this.autoSlide();
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  prevSlide(): void {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  autoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }
}