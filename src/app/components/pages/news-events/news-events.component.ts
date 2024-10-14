import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class NewsEventComponent {
  mainNewsItems = [
    { title: 'Quiz Competition highlights', description: 'The Quiz Compatitoin was organised by the Local Level Of Nagarain Muncipality', date: 'Oct 13, 2024', readTime: 6, imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/e89099175367629.64b2546008224.png' },
    { title: 'Quiz Competition highlights', description: 'The Quiz Compatitoin was organised by the Local Level Of Nagarain Muncipality', date: 'Oct 13, 2024', readTime: 6, imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/e89099175367629.64b2546008224.png' }
    // Add more main news items here
  ];

  secondaryNews = [
    { title: 'Local Level game', date: 'Oct 12, 2024', readTime: 4, imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/e89099175367629.64b2546008224.png' },
    // Add more secondary news items here
  ];

  latestArticles = [
    { title: 'Parents Teacher meeting', author: 'Leslie Alexander', date: '1 hour ago', imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/e89099175367629.64b2546008224.png' },
    // Add more articles here
  ];

  videoNewsItems = [
    { title: 'Highlights in Video', duration: 3, thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/404/e89099175367629.64b2546008224.png' },
    // Add more video news items here
  ];
}
