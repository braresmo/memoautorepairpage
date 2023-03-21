import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../services/info-page.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  private pages: any;

  constructor(private infoPage : InfoPageService) {

   }

  ngOnInit() {
    
  }

  getPages(){
    this.pages = this.infoPage.resp ;
    return this.pages;
  }

}
