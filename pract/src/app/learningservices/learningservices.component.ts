import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CaculatorserviceService} from '../caculatorservice.service';
@Component({
  selector: 'app-learningservices',
  templateUrl: './learningservices.component.html',
  styleUrls: ['./learningservices.component.css'],
  providers:[ServiceService]
})
export class LearningservicesComponent implements OnInit {
  result:any;
  constructor(private _serv:ServiceService,private _cal:CaculatorserviceService) { }

  ngOnInit() {
  }
  onSubmit(msg:any){
    this._serv.logging(msg);
  }
  onAdd(num1,num2){
    this.result = this._cal.onAdd(parseInt(num1),parseInt(num2));
  }
  onMultiply(num1,num2){
    this.result = this._cal.onMultiply(parseInt(num1),parseInt(num2));
  }
}
