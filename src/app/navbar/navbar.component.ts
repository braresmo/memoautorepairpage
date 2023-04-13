import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { httpService } from '../services/httpService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private infoPage : any ;

  constructor(private service : httpService , private appComponent : AppComponent) {
    
   }

  ngOnInit(): void {
    this.service.getInfoPage().subscribe({
      next: (v) => this.infoPage = v.ourService ,
      error: (e) => console.error(e),
      complete: () => {console.info('complete'); 
    } 
    })
  }

  getInfoPage(){
    return this.infoPage ;
  }

  togglePage(pageActive : string) {
    this.appComponent.togglePage(pageActive) ;
  }
}
