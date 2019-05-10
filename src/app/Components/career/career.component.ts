import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Career } from '../../models/career';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  career: Career;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  constructor(public rest: CareerService, private toastr: ToastrService) {
    this.rest.setCareer(this.career);
    this.career = new Career('','','');
   }

  ngOnInit() {
  }

  onSumit() {
    this.rest.setCareer(this.career).subscribe(res =>{
      console.log(res)
      if(res.message == 'Debes de llenar todos los campos'){
        this.toastr.error('Llenar todos los campos');
      }else{
        if(res.Carrera && res.Carrera._id){
          console.log('Se guardo');
          this.toastr.success('Se han guardados los datos', 'Guardar');
        }else if(res.message == 'El codigo ya fue registrado' || res.message == 'El nombre ya fue registrado' ){
          this.toastr.error('El codigo ya fue registrado', 'Error');
          this.toastr.error('Ó El nombre ya fue registrado', 'Error');
          
        }
          
      }
    })
  }
  save(){
    this.rest.setCareer(this.career).subscribe(res => {
      console.log(res);
    });
    this.toastr.success('Han sido guardados los datos', 'Guardado');
  }
}
