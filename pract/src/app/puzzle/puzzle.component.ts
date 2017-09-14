import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
    switchno1:number;
    switchno2:number;
    switchno3:number;
    switchno4:number;
  constructor() { }

  ngOnInit() {
        this.switchno1 = Math.round(Math.random());
        this.switchno2 = Math.round(Math.random());
        this.switchno3 = Math.round(Math.random());
        this.switchno4 = Math.round(Math.random());
        console.log(this.switchno1,this.switchno2,this.switchno3,this.switchno4);
  }

}