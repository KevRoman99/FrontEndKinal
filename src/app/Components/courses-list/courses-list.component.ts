import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Course } from '../../models/course'
import { CourseService } from '../../services/course.service'
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  curso: Course[]
  constructor(public rest: CourseService) { 

  }

  ngOnInit() {
    this.getCourse();
  }
  getCourse(){
    this.rest.getCourse().subscribe(res =>{
      console.log(res);
      this.curso = res.course
    })
  }




}
