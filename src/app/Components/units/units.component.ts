import { Component, OnInit } from '@angular/core';
import {AcademicUnits} from '../../models/academic-units';
import {AcademicUnitsService} from '../../services/academic-units.service';
import {ToastrService} from 'ngx-toastr';
import {FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  academicunits: AcademicUnits;
  form = new FormGroup({
    code: new FormControl('', Validators.required),
    academicUnit: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  constructor(public rest: AcademicUnitsService, private toastr: ToastrService) { 
    this.rest.setunits(this.academicunits);
    this.academicunits = new AcademicUnits('','','');
  }

  ngOnInit() {
  }
  onSumit() {
    this.rest.setunits(this.academicunits).subscribe(res =>{
      if(res.message == 'Debes de llenar todos los campos de unidades'){
        this.toastr.error('Debes de llenar todos los campos', 'Error');
      }else{
        if(res.Unidad && res.Unidad._id){
          console.log('Se guardo');
          this.toastr.success('Han sido guardados los datos', 'Guardado');
          
        }else if(res.message == 'La unidad academica ya esta registrada'){
          this.toastr.error('La unidad academica ya esta registrada', 'Error');
        }
          
      }
    })
    
  }
  save(){
    this.rest.setunits(this.academicunits).subscribe(res => {
      console.log(res);
    });
  }
}
