import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-cpr-form',

  standalone: true,

  imports: [
    FormsModule,
    CommonModule
  ],

  templateUrl: './cpr-form.component.html',

  styleUrls: ['./cpr-form.component.css']

})

export class CPRFormComponent {

  formData: any = {

    patientName: '',
    nric: '',
    clinicName: '',
    arrestDateTime: '',
    location: '',
    doctorInformedBy: '',
    doctorName: '',
    relativeName: '',
    ambulanceCalledBy: '',
    respiration: '',
    oxygen: '',
    pulse: '',
    bloodPressure: '',
    ecgRhythm: '',
    aed: '',
    avf: '',
    cvc: '',
    ivSite: '',
    insertedBy: '',
    outcome: ''

  };

  constructor(private http: HttpClient) {}

  submitForm() {

    console.log(this.formData);

    this.http.post(

      'http://localhost:5000/api/cpr',

      this.formData

    ).subscribe({

      next: (res: any) => {

        console.log(res);

        alert('CPR Form Saved Successfully');

      },

      error: (err) => {

        console.log(err);

        alert('Error Saving Form');

      }

    });

  }

}