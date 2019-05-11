import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Family } from '../../models/family';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  family: Family;

  showActions: boolean = true;

  @ViewChild('openModal') openModal:ElementRef;
  @ViewChild('dobleModal') dobleModal:ElementRef;

  constructor(public rest: FamilyService) {
    this.rest.setFamily(this.family);
    this.family = new Family('','','',null,null);
  }

  ngOnInit() {
    this.openModal.nativeElement.click();
  }

  cambio(){
    this.showActions = false;
  }

  save(){
    //this.rest.getPerson(this.family.son)
    this.rest.setFamily(this.family).subscribe(res => {
      console.log(res);
    });
  }

}
