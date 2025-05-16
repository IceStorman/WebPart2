import { Component } from '@angular/core'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';
import {Education} from '../../../api/dtos/dtos';

@Component({
  selector: "education-component",
  templateUrl: "./education-component.html",
  styleUrls: ["./education-component.scss"],
  imports: [
    FontAwesomeModule,
    NgForOf
  ]
})
export class EducationComponent {
  faGraduationCap = faGraduationCap;

  educations: Education[] = [
    {
      school: "Stanford University",
      years: "2011 - 2013",
      title: "MASTER DEGREE GRADUATE",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      school: "Chicago University",
      years: "2007 - 2010",
      title: "BACHELOR DEGREE",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
  ]
}
