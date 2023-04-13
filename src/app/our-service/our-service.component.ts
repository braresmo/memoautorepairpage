import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { httpService } from '../services/httpService.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  @Input() ourService:any ;
  showAll: boolean = false;
  constructor(private appComponent : AppComponent) { 

  }

  ngOnInit() {

  }
  getInfoPage(){
    return this.ourService ;
  }

  togglePage(pageActive : string) {
    this.appComponent.togglePage(pageActive) ;
  }

}
