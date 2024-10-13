import { Component, OnInit } from '@angular/core';

interface Blog {
  title: string;
  imageUrl: string;
  content: string;
  postDate: Date;
}

@Component({
  selector: 'app-our-blogs',
  templateUrl: './our-blogs.component.html',
  styleUrls: ['./our-blogs.component.css']
})
export class OurBlogsComponent implements OnInit {
  blogs: Blog[] = [
    {
      title: 'Exploring Nature',
      imageUrl: 'assets/images/nature.jpg',
      content: 'A journey through the beautiful landscapes of our local area.',
      postDate: new Date('2024-10-01')
    },
    {
      title: 'Science Fair Highlights',
      imageUrl: 'assets/images/science-fair.jpg',
      content: 'Recap of the amazing projects from this year’s science fair.',
      postDate: new Date('2024-09-20')
    },
    {
      title: 'Cultural Fest 2024',
      imageUrl: 'assets/images/cultural-fest.jpg',
      content: 'Celebrating diversity through our annual cultural festival.',
      postDate: new Date('2024-09-15')
    }
  ];

  selectedBlog?: Blog;

  constructor() {}

  ngOnInit(): void {
    // Sort blogs based on post date (newest first)
    this.blogs.sort((a, b) => b.postDate.getTime() - a.postDate.getTime());
  }

  openBlogDetails(blog: Blog) {
    this.selectedBlog = blog;
  }

  closeModal() {
    this.selectedBlog = undefined;
  }
}
