import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-with-value',
  templateUrl: './text-with-value.component.html',
  styleUrls: ['./text-with-value.component.css']
})
export class TextWithValueComponent implements OnInit {
  @Input('title') title: string;
  @Input('value') value: string | number;

  constructor() { }

  ngOnInit() {
  }

}
