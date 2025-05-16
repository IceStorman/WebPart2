import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faChartPie, faFlagCheckered} from '@fortawesome/free-solid-svg-icons';
import {Hobby} from '../../../api/dtos/dtos';

@Component({
  selector: 'hobbies-component',
  templateUrl: './hobbies-component.html',
  imports: [
    CommonModule,
    FaIconComponent
  ],
  styleUrls: ['./hobbies-component.scss']
})
export class HobbiesComponent {
  faFlagCheckered = faFlagCheckered;

  hobbies: Hobby[] = [
    { name: 'Book Reading', level: 90 },
    { name: 'Travelling', level: 70 },
    { name: 'Playing Chess', level: 85 },
    { name: 'Painting', level: 75 },
    { name: 'Graphic Design', level: 80 }
  ]
}
