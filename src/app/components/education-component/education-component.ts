import { Component } from '@angular/core'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: "education-component",
  templateUrl: "./education-component.html",
  styleUrls: ["./education-component.scss"],
  imports: [
    FontAwesomeModule
  ]
})
export class EducationComponent {
  faGraduationCap = faGraduationCap;
}
