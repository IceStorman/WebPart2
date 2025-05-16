import {Component, OnInit} from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';
import {Reference} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: 'references-component',
  templateUrl: 'references-component.html',
  imports: [
    FaIconComponent,
    NgForOf
  ],
  styleUrls: ['references-component.scss']
})
export class ReferencesComponentComponent implements OnInit {
  faUsers = faUsers;

  references: Reference[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getReference().subscribe((data: Reference[]) => {
      this.references = data;
    })
  }
}
