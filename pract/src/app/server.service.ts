import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServerService {

  constructor(private _http:Http) { }

  getData(){
    return this._http.get("http://date.jsontest.com").map(res => res.json());
  }
  // _errorhandler(error:Error){
  //   console.error()
  // }
  postData(){
    var json = JSON.stringify({var1:'test',var2:3});
    var params = 'json='+json;
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post("http://validate.jsontest.com",params,{headers:headers})
    .map(res => res.json());
  }
}
