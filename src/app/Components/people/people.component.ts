import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';
import { PersonServiceService } from '../../services/person-service.service';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  titulo = 'Modulo de persona';
  person: Person;
  message = 'Dato guardado';
  emaii = []
  telephone =  []
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    firstLastName: new FormControl('', Validators.required),
    marriedName: new FormControl('', Validators.required),
    birthname: new FormControl('', Validators.required),
    civilStatus: new FormControl('', Validators.required),
    religion: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    department: new FormControl('', Validators.required),
    municipality: new FormControl('', Validators.required),
    zone: new FormControl('', Validators.required),
  });
  

  constructor(public rest: PersonServiceService,private toastr: ToastrService) {
    this.rest.setPerson(this.person);
    this.person = new Person('','','','','',null,'',null,'','',null,'','',null,'','','','','','',null,'','',null)
  }

  ngOnInit() {
    
  }

  onSumit() {
    if(this.person.firstName == '' || this.person.firstLastName == '' || this.person.birthname == null || this.person.civilStatus == '' || this.person.religion == '' || this.person.gender == '' || this.person.department == '' || this.person.municipality == '' || this.person.zone == null){
      this.toastr.error('Debes de llenar todos los campos', 'Error')
    }else{
      if(this.person.gender == 'FEMENINO' && this.person.civilStatus == 'CASADA' && this.person.marriedName != ''){
        this.save();
      }else if(this.person.gender == 'MASCULINO'){
        this.save();
      }
    }
  }

  save(){
    this.addEmail();
    this.addPhone();
    this.person.email = this.emaii;
    this.person.otherNumber = this.telephone;
    this.rest.setPerson(this.person).subscribe(res => {
      console.log(res);
    });
    console.clear();
  }
  addEmail(){
   
    this.emaii.push(this.person.email);
    console.log(this.emaii); 
    this.person.email = [''];

  }
  

  addPhone(){
    this.telephone.push(this.person.otherNumber);
    console.log("datos guardados de phone",this.telephone);
    this.person.otherNumber = [''];
  }
}