import {Component, OnInit} from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {Language} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: 'languages-component',
  templateUrl: 'languages-component.html',
  imports: [
    CommonModule,
    FaIconComponent
  ],
  styleUrls: ['languages-component.scss'],
})
export class LanguagesComponent implements OnInit {
  faGlobe = faGlobe;

  languages: Language[] = [];

  radius = 80;
  circumference = 2 * Math.PI * this.radius;

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getLanguages().subscribe((data: Language[]) => {
      this.languages = data;
    })
  }
}
