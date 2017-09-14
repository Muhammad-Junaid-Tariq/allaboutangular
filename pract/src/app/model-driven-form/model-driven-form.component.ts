import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  myForm:FormGroup;
  user = {email:"",password:""};
  constructor(private _formbuild:FormBuilder) { }
  ngOnInit() {
    this.myForm = this._formbuild.group({
      'email':["",Validators.required],
      'password':["",Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'confpassword':["",Validators.required]
    });
  }
  onSubmit(){
    this.user = this.myForm.value;
    console.log(this.user);
  }
}