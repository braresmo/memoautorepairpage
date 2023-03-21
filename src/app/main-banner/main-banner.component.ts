import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

@Input() infoBanner :any ;

  constructor() { }

  ngOnInit(): void {
  }

}
