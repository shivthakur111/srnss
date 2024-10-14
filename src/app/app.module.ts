import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/layout/app-header/app-header.component';
import { AppFooterComponent } from './components/layout/app-footer/app-footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SliderComponent } from './components/UI/slider/slider.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FacultiesComponent } from './components/pages/academics/faculties/faculties.component';
import { RoutinesComponent } from './components/pages/academics/routines/routines.component';
import { SyllabusCurriculumComponent } from './components/pages/academics/syllabus-curriculum/syllabus-curriculum.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { NoticesComponent } from './components/pages/notices/notices.component';
import { OurBlogsComponent } from './components/pages/our-blogs/our-blogs.component';
import { NewsEventComponent } from './components/pages/news-events/news-events.component';
import { AdmissionComponent } from './components/pages/online-services/admission/admission.component';
import { ResultsComponent } from './components/pages/online-services/results/results.component';
import { CcLcComponent } from './components/pages/online-services/cc-lc/cc-lc.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    SliderComponent,
    AboutUsComponent,
    FacultiesComponent,
    RoutinesComponent,
    SyllabusCurriculumComponent,
    OurTeamComponent,
    ContactUsComponent,
    NoticesComponent,
    OurBlogsComponent,
    NewsEventComponent,
    AdmissionComponent,
    ResultsComponent,
    CcLcComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
