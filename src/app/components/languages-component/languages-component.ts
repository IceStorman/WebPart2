import { Component } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {Language} from '../../../api/dtos/dtos';

@Component({
  selector: 'languages-component',
  templateUrl: 'languages-component.html',
  imports: [
    CommonModule,
    FaIconComponent
  ],
  styleUrls: ['languages-component.scss'],
})
export class LanguagesComponent {
  faGlobe = faGlobe;

  languages: Language[] = [
    { name: 'ENGLISH', percent: 95 },
    { name: 'GERMAN', percent: 60 },
    { name: 'SPANISH', percent: 45 }
  ];

  radius = 80;
  circumference = 2 * Math.PI * this.radius;
}
