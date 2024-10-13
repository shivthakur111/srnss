import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  authorizedPersons = [
    {
      name: 'Mr. Premendra Kumar Nidhi',
      position: 'Principal',
      phone: '+977-9800822617',
      email: 'srnss2005@gmail.com',
      img: 'assets/headsir.jpg' // Replace with actual image path
    },
    {
      name: 'Suresh Thakur',
      position: 'Accountant',
      phone: '+977-9824816048',
      email: 'stnagarain@gmail.com',
      img: 'assets/images/sureshthakur.jpg' // Replace with actual image path
    },
    {
      name: 'Shiv Thakur',
      position: 'Tech. Assistant',
      phone: '+977-9817684353',
      email: 'shivtagore111@gmail.com',
      img: 'assets/images/shivthakur.jpg' // Replace with actual image path
    }
  ];


}
