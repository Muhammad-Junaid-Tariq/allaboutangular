import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers:[ServerService]
})
export class HttpComponent implements OnInit {
data;
postdata;

  constructor(private _serverservice:ServerService) { }

  ngOnInit() {
    this._serverservice.getData().subscribe(resdata => this.data = JSON.stringify(resdata));
  }
  onPost(){
    this._serverservice.postData().subscribe(data => this.postdata = JSON.stringify(data));
  }


}
