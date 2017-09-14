import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-secondpropertbind',
  templateUrl: './secondpropertbind.component.html',
  styleUrls: ['./secondpropertbind.component.css'],
  inputs:['name:myName'],
  outputs:['hobbieschanged']
})
export class SecondpropertbindComponent implements OnInit {
  @Input('myAge') age = "";
  constructor() { }

  ngOnInit() {
  }
  hobbieschanged = new EventEmitter<string>();
  onhobbieschanged(hobbies){
    this.hobbieschanged.emit(hobbies);
  }
}
