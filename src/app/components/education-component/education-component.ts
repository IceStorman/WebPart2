import {Component, OnInit} from '@angular/core'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';
import {Education} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: "education-component",
  templateUrl: "./education-component.html",
  styleUrls: ["./education-component.scss"],
  imports: [
    FontAwesomeModule,
    NgForOf
  ]
})
export class EducationComponent implements OnInit {
  faGraduationCap = faGraduationCap;

  educations: Education[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getEducation().subscribe((data: Education[]) => {
      this.educations = data;
    })
  }
}
