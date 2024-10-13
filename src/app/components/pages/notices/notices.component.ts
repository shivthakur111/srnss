import { Component, OnInit } from '@angular/core';

interface Notice {
  title: string;
  imageUrl: string;
  details: string;
  postDate: Date;
}

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices: Notice[] = [
    {
      title: 'Annual Sports Day',
      imageUrl: 'https://kist-edu-np.s3.ap-south-1.amazonaws.com/uploads/media/6f2b9e0026b71eaf18e9c4284851f517a81175631701242170.jpg',
      details: 'Join us for the Annual Sports Day on March 5th, 2024.',
      postDate: new Date('2024-03-01')
    },
    {
      title: 'Parent-Teacher Meeting',
      imageUrl: 'https://kist-edu-np.s3.ap-south-1.amazonaws.com/uploads/media/6f2b9e0026b71eaf18e9c4284851f517a81175631701242170.jpg',
      details: 'We invite all parents to attend the meeting on March 10th, 2024.',
      postDate: new Date('2024-03-02')
    },
    {
      title: 'School Holiday Notice',
      imageUrl: 'https://kist-edu-np.s3.ap-south-1.amazonaws.com/uploads/media/6f2b9e0026b71eaf18e9c4284851f517a81175631701242170.jpg',
      details: 'The school will be closed on March 15th for the holiday.',
      postDate: new Date('2024-03-03')
    }
  ];

  selectedNotice?: Notice;

  constructor() {}

  ngOnInit(): void {
    // Sort notices based on post date (newest first)
    this.notices.sort((a, b) => b.postDate.getTime() - a.postDate.getTime());
  }

  openNoticeDetails(notice: Notice) {
    this.selectedNotice = notice;
  }

  closeModal() {
    this.selectedNotice = undefined;
  }
}
