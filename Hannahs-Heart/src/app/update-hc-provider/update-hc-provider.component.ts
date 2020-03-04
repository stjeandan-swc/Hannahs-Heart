import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-hc-provider',
  templateUrl: './update-hc-provider.component.html',
  styleUrls: ['./update-hc-provider.component.css']
})
export class UpdateHcProviderComponent implements OnInit {

  alphaList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  doctorsList = [
    {
      fistName: 'Dan',
      lastName: 'St-Jean',
      specialty: 'Counsellor',
      gender: 'M'
    },
    {
      fistName: 'Julia',
      lastName: 'Dunayeva',
      specialty: 'Therapist',
      gender: 'F'
    },
    {
      fistName: 'Don',
      lastName: 'Valintine',
      specialty: 'Psychologist',
      gender: 'M'
    },
    {
      fistName: 'Helen',
      lastName: 'Adler',
      specialty: 'Counsellor',
      gender: 'F'
    },
    {
      fistName: 'Sara',
      lastName: 'Finch',
      specialty: 'Psychologist',
      gender: 'F'
    }
  ];

  showForm: Boolean = false;

  constructor() {}

  ngOnInit() {
  }

  openForm() {
    document.getElementById('overlay').style.display = 'block';
    this.toggleForm();
  }

  closeForm() {
    document.getElementById('overlay').style.display = 'none';
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
