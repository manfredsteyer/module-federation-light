import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flights-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  info = Math.round(Math.random() * 10000);

  constructor() { }

  ngOnInit(): void {
  }

}
