import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FacultiesComponent } from './components/pages/academics/faculties/faculties.component';
import { RoutinesComponent } from './components/pages/academics/routines/routines.component';
import { SyllabusCurriculumComponent } from './components/pages/academics/syllabus-curriculum/syllabus-curriculum.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { NoticesComponent } from './components/pages/notices/notices.component';
import { OurBlogsComponent } from './components/pages/our-blogs/our-blogs.component';
import { NewsEventComponent } from './components/pages/news-events/news-events.component';
import { AdmissionComponent } from './components/pages/online-services/admission/admission.component';
import { ResultsComponent } from './components/pages/online-services/results/results.component';
import { CcLcComponent } from './components/pages/online-services/cc-lc/cc-lc.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'faculties',component:FacultiesComponent},
  { path: 'routines',component:RoutinesComponent},
  { path: 'syllabus&curriculum',component:SyllabusCurriculumComponent},
  { path: 'our-team',component:OurTeamComponent},
  { path: 'contact-us',component:ContactUsComponent},
  { path: 'notices', component: NoticesComponent},
  { path: 'our-blogs', component: OurBlogsComponent},
  { path: 'news-events', component: NewsEventComponent},
  { path: 'admission', component: AdmissionComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'cc-lc', component: CcLcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
