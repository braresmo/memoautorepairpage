import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() news:any ;
  newsindice : number = -1;

  constructor() { }

  ngOnInit() {
  }

  selectNews(indice:number){
    this.newsindice = indice;
  }

}
