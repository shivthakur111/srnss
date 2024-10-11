import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FacultiesComponent } from './components/pages/academics/faculties/faculties.component';
import { RoutinesComponent } from './components/pages/academics/routines/routines.component';
import { SyllabusCurriculumComponent } from './components/pages/academics/syllabus-curriculum/syllabus-curriculum.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'faculties',component:FacultiesComponent},
  { path: 'routines',component:RoutinesComponent},
  { path: 'syllabus&curriculum',component:SyllabusCurriculumComponent},
  { path: 'our-team',component:OurTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
