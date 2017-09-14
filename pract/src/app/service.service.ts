import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }
  logging(msg:string){
    console.log("Message Recieved:"+msg);
  }

}
