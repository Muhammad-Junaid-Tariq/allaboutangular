import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybindings',
  templateUrl: './propertybindings.component.html',
  styleUrls: ['./propertybindings.component.css'],
  inputs:['hobbies']
})
export class PropertybindingsComponent implements OnInit {

  name="";
  age=26;
  constructor() { }

  ngOnInit() {
  }

}


