import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../services/info-page.service';

@Component({
  selector: 'app-memo-autorepair',
  templateUrl: './memo-autorepair.component.html',
  styleUrls: ['./memo-autorepair.component.css']
})
export class MemoAutorepairComponent implements OnInit {

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
