import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cpr-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
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
    outcome: '',
    avfUsed: '',
    avfTime: '',
    avfSite: '',
    cvcUsed: '',
    cvcTime: '',
    cvcSite: '',
    ivTime: '',
    drugTime: '',
    drugECG: '',
    aedDefib: '',
    adrenaline: '',
    atropine: '',
    calcium: '',
    bicarbonate: '',
    otherDrugs: '',
    route: '',
    adminBy: ''

  };

  constructor(private http: HttpClient) {}

  submitForm() {

    console.log(this.formData);

    this.http.post(

      'https://cpr-backend-8gkp.onrender.com/api/cpr',

      this.formData

    ).subscribe({

      next: (res) => {

        console.log(res);

        alert('CPR Form Saved Successfully');

        this.formData = {

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
          outcome: '',
          avfUsed: '',
          avfTime: '',
          avfSite: '',
          cvcUsed: '',
          cvcTime: '',
          cvcSite: '',
          ivTime: '',
          drugTime: '',
          drugECG: '',
          aedDefib: '',
          adrenaline: '',
          atropine: '',
          calcium: '',
          bicarbonate: '',
          otherDrugs: '',
          route: '',
          adminBy: ''

        };

      },

      error: (err) => {

        console.log(err);

        alert('Error Saving Form');

      }

    });

  }

}