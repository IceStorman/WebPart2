import {Component, OnInit} from '@angular/core'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Education} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: "education-component",
  templateUrl: "./education-component.html",
  styleUrls: ["./education-component.scss"],
  imports: [
    FontAwesomeModule,
    NgForOf,
    NgIf
  ]
})
export class EducationComponent implements OnInit {
  faGraduationCap = faGraduationCap;

  isModalOpen = false;

  educations: Education[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getEducation().subscribe((data: Education[]) => {
      this.educations = data;
    })
  }

  onAdd() {
    console.log("hihi");
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
