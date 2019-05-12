import { CareerService } from './../../services/career.service';
import { Component, OnInit } from '@angular/core';
import { Career } from '../../models/career';
import { restoreView } from '@angular/core/src/render3';

@Component({
  selector: 'app-careers-list',
  templateUrl: './careers-list.component.html',
  styleUrls: ['./careers-list.component.css']
})
export class CareersListComponent implements OnInit {
  career: Career[];
  constructor(public rest: CareerService) { }

  ngOnInit() {
    this.getCareer();
  }

  getCareer(){
    this.rest.getCareer().subscribe(res =>{
      this.career = res.career;
    });
  }

}
