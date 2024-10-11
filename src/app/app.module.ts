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
