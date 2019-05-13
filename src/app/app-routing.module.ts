import { FamilyComponent } from './Components/family/family.component';
import { CareerComponent } from './Components/career/career.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsComponent } from './components/units/units.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesListComponent } from './Components/courses-list/courses-list.component';
import { CareersListComponent } from './Components/careers-list/careers-list.component';
import { PeopleComponent } from './Components/people/people.component';

const routes: Routes = [
  {path: 'Save-People', component: PeopleComponent},
  {path: 'Save-Units-Academic', component: UnitsComponent},
  {path: 'Save-Career-Educative', component: CareerComponent},
  {path: 'Save-Course', component: CoursesComponent},
  {path: 'List-Course', component: CoursesListComponent},
  {path: 'Add-family', component: FamilyComponent},
  {path: 'List-Career', component: CareersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
