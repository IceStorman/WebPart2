import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faChartPie, faFlagCheckered} from '@fortawesome/free-solid-svg-icons';
import {Hobby} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: 'hobbies-component',
  templateUrl: './hobbies-component.html',
  imports: [
    CommonModule,
    FaIconComponent
  ],
  styleUrls: ['./hobbies-component.scss']
})
export class HobbiesComponent implements OnInit {
  faFlagCheckered = faFlagCheckered;

  hobbies: Hobby[] = []

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getHobbies().subscribe((data: Hobby[]) => {
      this.hobbies = data;
    })
  }
}
