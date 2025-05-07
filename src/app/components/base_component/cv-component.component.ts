import { Component } from '@angular/core';
import {CandidateSummary} from '../candidate-summary-component/candidate-summary-component';
import {AboutMeComponent} from '../about-me-component/about-me-component';

@Component({
  selector: 'cv-component',
  imports: [
    CandidateSummary,
    AboutMeComponent
  ],
  templateUrl: './cv-component.component.html'
})
export class CvComponent {}
