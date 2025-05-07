import { Component } from '@angular/core';
import {CandidateSummary} from '../candidate-summary-component/candidate-summary-component';

@Component({
  selector: 'cv-component',
  imports: [
    CandidateSummary
  ],
  templateUrl: './cv-component.component.html'
})
export class CvComponent {}
