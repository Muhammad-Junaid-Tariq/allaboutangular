import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inputcomponent',
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.css'],

})
export class InputcomponentComponent implements OnInit {
  success = true;
  recieved:String;
  optional:string;
  array = ['apple','banana','mango','peach','strawberry'];
  constructor(private _routparams:ActivatedRoute){}
  ngOnInit() {
    this._routparams.params.subscribe((params:Params)=>{
      this.recieved = params['id'];
    });
  }
}
