import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user = {email:"Junaid",password:"122"};
  constructor() { }

  ngOnInit() {
  }
  onSubmit(fom:any){
    console.log(fom.value);
  }
}
