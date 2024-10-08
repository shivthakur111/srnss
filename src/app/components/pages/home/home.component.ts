import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  events = [
    {
      title: 'Happy Dashain from Lincoln School!',
      description: 'Wishing our entire Lincoln community and all families across Nepal a joyous and prosperous Dashain...',
      image: 'https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/461166572_4091639424492255_1891134706911474238_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEma_rJ-FOXM3YWdVQPwVwZulTA8s-WTou6VMDyz5ZOiw9d70U76g13dWwMYB5CGC0utmIH1QxsgHd9IFj0VuGq&_nc_ohc=GdNsgFLYuX0Q7kNvgGyPNRu&_nc_ht=scontent.fktm18-1.fna&_nc_gid=AdnBaGzZcILq2h1TNarqLH_&oh=00_AYD7SQzjAqX1gL5heTPu51YX2ddCega7cdOXfgEtxWpjaA&oe=670745E1', // Replace with the path to your image
      date: '04 October, 2024',
    },
    {
      title: 'Synchronized Swimming in Grade 9 PE',
      description: 'With a wonderful display of rhythm, coordination, and grace, Grade 9 students finished their aquatics...',
      image: 'https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/461166572_4091639424492255_1891134706911474238_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEma_rJ-FOXM3YWdVQPwVwZulTA8s-WTou6VMDyz5ZOiw9d70U76g13dWwMYB5CGC0utmIH1QxsgHd9IFj0VuGq&_nc_ohc=GdNsgFLYuX0Q7kNvgGyPNRu&_nc_ht=scontent.fktm18-1.fna&_nc_gid=AdnBaGzZcILq2h1TNarqLH_&oh=00_AYD7SQzjAqX1gL5heTPu51YX2ddCega7cdOXfgEtxWpjaA&oe=670745E1',
      date: '04 October, 2024',
    },
    {
      title: 'Writers’ World',
      description: 'Writers’ World – the second and fifth-grade classes met to share their completed personal narratives...',
      image: 'https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/461166572_4091639424492255_1891134706911474238_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEma_rJ-FOXM3YWdVQPwVwZulTA8s-WTou6VMDyz5ZOiw9d70U76g13dWwMYB5CGC0utmIH1QxsgHd9IFj0VuGq&_nc_ohc=GdNsgFLYuX0Q7kNvgGyPNRu&_nc_ht=scontent.fktm18-1.fna&_nc_gid=AdnBaGzZcILq2h1TNarqLH_&oh=00_AYD7SQzjAqX1gL5heTPu51YX2ddCega7cdOXfgEtxWpjaA&oe=670745E1',
      date: '03 October, 2024',
    },
    {
      title: 'Grade 2 Target Ball',
      description: 'Grade 2 students are currently doing a unit on Cooperative Games. Today, they were playing “Target Ball”...',
      image: 'https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/461166572_4091639424492255_1891134706911474238_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEma_rJ-FOXM3YWdVQPwVwZulTA8s-WTou6VMDyz5ZOiw9d70U76g13dWwMYB5CGC0utmIH1QxsgHd9IFj0VuGq&_nc_ohc=GdNsgFLYuX0Q7kNvgGyPNRu&_nc_ht=scontent.fktm18-1.fna&_nc_gid=AdnBaGzZcILq2h1TNarqLH_&oh=00_AYD7SQzjAqX1gL5heTPu51YX2ddCega7cdOXfgEtxWpjaA&oe=670745E1',
      date: '02 October, 2024',
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
