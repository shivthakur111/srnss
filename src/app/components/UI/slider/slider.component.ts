import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
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
  intervalId: any;

  ngOnInit(): void {
    this.autoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  prevSlide(): void {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  autoSlide(): void {
    this.clearAutoSlide(); // Clear any existing interval
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  clearAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null; // Set to null to prevent multiple calls
    }
  }

  onMouseEnter(): void {
    this.clearAutoSlide(); // Pause the slider on hover
  }

  onMouseLeave(): void {
    this.autoSlide(); // Restart the slider when mouse leaves
  }

  // Touch event handlers for mobile
  onTouchStart(): void {
    this.clearAutoSlide(); // Pause the slider on touch
  }

  onTouchEnd(): void {
    this.autoSlide(); // Restart the slider when touch ends
  }
}
