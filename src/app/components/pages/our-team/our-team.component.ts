import { Component } from '@angular/core';

interface StaffMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  staffMembers: StaffMember[] = [
    {
      name: 'Premendra Kumar Nidhi',
      position: 'Principal',
      description: 'John has over 20 years of experience in education and is passionate about student success.',
      image: '/assets/headsir.jpg'
    },
    {
      name: 'Premendra Kumar Nidhi',
      position: 'Principal',
      description: 'John has over 20 years of experience in education and is passionate about student success.',
      image: '/assets/headsir.jpg'
    },
    {
      name: 'Premendra Kumar Nidhi',
      position: 'Principal',
      description: 'John has over 20 years of experience in education and is passionate about student success.',
      image: '/assets/headsir.jpg'
    },
    {
      name: 'Premendra Kumar Nidhi',
      position: 'Principal',
      description: 'John has over 20 years of experience in education and is passionate about student success.',
      image: '/assets/headsir.jpg'
    },
    {
      name: 'Premendra Kumar Nidhi',
      position: 'Principal',
      description: 'John has over 20 years of experience in education and is passionate about student success.',
      image: '/assets/headsir.jpg'
    },
    {
      name: 'Premendra Kumar Nidhi',
      position: 'Principal',
      description: 'John has over 20 years of experience in education and is passionate about student success.',
      image: '/assets/headsir.jpg'
    }
  ];

  isModalOpen = false;
  selectedStaff: StaffMember | null = null;

  openModal(staff: StaffMember) {
    this.selectedStaff = staff;
    this.isModalOpen = true;
  }

  closeModal() {
    this.selectedStaff = null;
    this.isModalOpen = false;
  }
}
