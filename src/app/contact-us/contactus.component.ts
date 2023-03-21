import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  @Input() infopage : any ;
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.infopage.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.infopage.urlMap);
    console.log(this.infopage);
  }
}
