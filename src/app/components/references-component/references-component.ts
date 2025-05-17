import {Component, OnInit} from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Education, Reference} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';
import {switchMap} from 'rxjs';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'references-component',
  templateUrl: 'references-component.html',
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['references-component.scss']
})
export class ReferencesComponentComponent implements OnInit {
  faUsers = faUsers;
  isModalOpen = false;
  form: FormGroup;

  references: Reference[] = [];

  constructor(private fb: FormBuilder, private ApiService: ApiService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ApiService.getReferences().subscribe((data: Reference[]) => {
      this.references = data;
    })
  }

  handleSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newReference: Reference = {
      name: this.form.value.name,
      description: this.form.value.description,
      phoneNumber: this.form.value.phone,
      email: this.form.value.email
    };

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
    this.form.reset();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.form.reset();
  }
}
