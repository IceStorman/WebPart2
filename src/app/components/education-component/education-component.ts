import { Component } from '@angular/core'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';

class Education {
  constructor(
    public school: string,
    public years: string,
    public title: string,
    public description: string
  ) {}
}

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

  educations = [
    new Education(
      "Stanford University",
      "2011 - 2013",
      "MASTER DEGREE GRADUATE",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ),
    new Education(
      "Chicago University",
      "2007 - 2010",
      "BACHELOR DEGREE",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
  ]
}
