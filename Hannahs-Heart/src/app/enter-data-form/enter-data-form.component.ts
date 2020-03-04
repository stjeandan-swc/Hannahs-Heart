import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enter-data-form',
  templateUrl: './enter-data-form.component.html',
  styleUrls: ['./enter-data-form.component.css']
})
export class EnterDataFormComponent implements OnInit {

  @Input() showForm: boolean;

  constructor() { }

  ngOnInit() {
  }

}
