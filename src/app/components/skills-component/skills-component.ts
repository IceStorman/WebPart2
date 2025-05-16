import { Component } from "@angular/core";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: "skills-component",
  templateUrl: "./skills-component.html",
  imports: [
    CommonModule,
    FaIconComponent
  ],
  styleUrls: ["./skills-component.scss"]
})
export class SkillsComponent{
  faChartPie = faChartPie;

  skills = [
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'Adobe Illustrator', level: 70 },
    { name: 'Microsoft Word', level: 85 },
    { name: 'Microsoft Powerpoint', level: 75 },
    { name: 'HTML-S/CSS-3', level: 80 }
  ];
}
