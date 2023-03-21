import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../services/info-page.service';

@Component({
  selector: 'app-auto-bodies',
  templateUrl: './auto-bodies.component.html',
  styleUrls: ['./auto-bodies.component.css']
})
export class AutoBodiesComponent implements OnInit {
  private pages: any;

  constructor(private infoPage : InfoPageService) { }

  ngOnInit(): void {
  }

  getPages(){
    this.pages = this.infoPage.resp ;
    return this.pages;
  }

}
