import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core/ui/page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private page: Page) { 
    this.page.actionBarHidden = true;
  }

  ngOnInit() {}

}
