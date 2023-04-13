import { Component, OnInit } from '@angular/core';
import { httpService } from './services/httpService.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  private isServicePage:string = 'all';
  private infoPage:any;
  title : string  = '';

  constructor(private service:httpService){

  }

  ngOnInit() {
    this.service.getInfoPage().subscribe({
      next: (v) => this.infoPage = v ,
      error: (e) => console.error(e),
      complete: () => {console.info('complete'); 
    } 
    });

    AOS.init({
      offset: 250,
      duration: 2000,
      once: true,
    })
  }

  togglePage(pageActive : string) {
    this.isServicePage = pageActive ;
  }

  getisServicePage(){
    return this.isServicePage;
  }

  getInfoPage(){
    return this.infoPage ;
  }
}
