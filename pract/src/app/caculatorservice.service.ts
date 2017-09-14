import { Injectable } from '@angular/core';

@Injectable()
export class CaculatorserviceService {

  constructor() { }
  onMultiply(num1:any,num2:any){
    return num1*num2; 
   }
  onAdd(num1:any,num2:any){
    return num1+num2;
  }
}
