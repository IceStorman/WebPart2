import {Component, OnInit} from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Education, Reference} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';
import {switchMap} from 'rxjs';

@Component({
  selector: 'references-component',
  templateUrl: 'references-component.html',
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf
  ],
  styleUrls: ['references-component.scss']
})
export class ReferencesComponentComponent implements OnInit {
  faUsers = faUsers;
  isModalOpen = false;

  references: Reference[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getReferences().subscribe((data: Reference[]) => {
      this.references = data;
    })
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const description = (form.elements.namedItem('description') as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;

    const newReference: Reference = {name: name, description: description, phoneNumber: phone, email: email};

    this.ApiService.createReference(newReference).pipe(
      switchMap(() => this.ApiService.getReferences())
    ).subscribe({
      next: (response) => {
        this.ApiService.getReferences().subscribe((data: Reference[]) => {
          this.references = data;
        })
      },
      error: (err) => {
        console.error('Update failed', err);
      }
    });

    this.closeModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
