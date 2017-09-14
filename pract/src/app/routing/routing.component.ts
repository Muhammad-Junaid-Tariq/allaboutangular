import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  name:String="";
  constructor(private rout:Router,private _routeactivate:ActivatedRoute) { }

  ngOnInit() {
  }
  navigatetoinput(){
    this.rout.navigate(['/inputcomponent',this.name]);
  }

}
