import {Component, OnInit} from "@angular/core";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {Skill} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: "skills-component",
  templateUrl: "./skills-component.html",
  imports: [
    CommonModule,
    FaIconComponent
  ],
  styleUrls: ["./skills-component.scss"]
})
export class SkillsComponent implements OnInit {
  faChartPie = faChartPie;

  skills: Skill[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getSkills().subscribe((data: Skill[]) => {
      this.skills = data;
    })
  }
}
