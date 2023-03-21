import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() memoAutoRepair : any ;
  @Input() autoBodies : any ;
  private infoPage : any ;
  

  constructor() {
    
   }

  ngOnInit(): void {
    
  }
  getInfo(){
    this.infoPage =  this.memoAutoRepair != null ? this.memoAutoRepair : this.autoBodies ;
    return this.infoPage ;
  }

}
