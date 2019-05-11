import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PeopleComponent } from './Components/people/people.component';
import { Person } from './models/person';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
//Services
import { PersonServiceService } from './services/person-service.service';
import { AcademicUnitsService } from './services/academic-units.service';
import { CareerService } from './services/career.service';

//Connection
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { UnitsComponent } from './components/units/units.component';
import { from } from 'rxjs';
import { CareerComponent } from './Components/career/career.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesListComponent } from './Components/courses-list/courses-list.component';
import { CareersListComponent } from './Components/careers-list/careers-list.component';
import { FamilyComponent } from './Components/family/family.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    UnitsComponent,
    CareerComponent,
    CoursesComponent,
    CoursesListComponent,
    CareersListComponent,
    FamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    PersonServiceService,AcademicUnitsService, CareerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
