import { Component } from '@angular/core';
import {CandidateSummary} from '../candidate-summary-component/candidate-summary-component';
import {AboutMeComponent} from '../about-me-component/about-me-component';
import {EducationComponent} from '../education-component/education-component';

@Component({
  selector: 'cv-component',
  imports: [
    CandidateSummary,
    AboutMeComponent,
    EducationComponent
  ],
  templateUrl: './cv-component.component.html'
})
export class CvComponent {}
