import { Component, OnInit, Input } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-enter-data-form',
  templateUrl: './enter-data-form.component.html',
  styleUrls: ['./enter-data-form.component.css']
})
export class EnterDataFormComponent implements OnInit {

  @Input() showForm: boolean;

  genderList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() { }

  ngOnInit() {
    this.genderList = [
      { item_id: 1, item_text: 'Male'},
      { item_id: 2, item_text: 'Female'},
      { item_id: 3, item_text: 'Trans Male'},
      { item_id: 4, item_text: 'Trans Female'},
      { item_id: 5, item_text: 'Other'}
    ];

    this.selectedItems = [];
    /*
    this.dropdownSettings:IDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    */
  }
}
