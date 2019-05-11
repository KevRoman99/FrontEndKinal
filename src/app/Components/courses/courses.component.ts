import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course: Course; 
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  constructor(public rest: CourseService, private toastr: ToastrService) {
    this.rest.setCourse(this.course);
    this.course = new Course('','','');
   }

  ngOnInit() {
  }
  onSumit() {
    this.rest.setCourse(this.course).subscribe(res =>{
      console.log(res)
      if(res.message == 'Debes de llenar todos los campos'){
        this.toastr.error('Llenar todos los campos');
      }else{
        if(res.Courso && res.Courso._id){
          console.log('Se guardo');
          this.toastr.success('Se han guardados los datos', 'Guardar');
          this.limpiar();
        }else if(res.message == 'El codigo ya fue registrado' ){
          this.toastr.error('El codigo ya fue registrado', 'Error');
        }else if(res.message == 'El nombre ya fue registrado'){
          this.toastr.error('El nombre ya fue registrado', 'Error');
        }
          
      }
    })
  }
  limpiar(){
    this.form.reset();
  }

}
