import { Component, Input, OnInit } from '@angular/core';
import { httpService } from '../services/httpService.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @Input() ourService:any ;
  formData:any = {
    name : '',
    email : '',
    message : '',
    subject :'',
    phoneNumber : ''
  };
  index:number=-1;

  constructor(private http:httpService) { 
  }

  ngOnInit() {
  }

  getInfoPage(){
    return this.ourService ;
  }

  setContact(message:string , subject:string , index:number){
    this.formData.message = `I want to know more about ${message} .
    Car make:
    Model:
    Year:
    Engine size:
    Transmission type:
    Mileage:
    Description of the issue:`;
    this.formData.subject = subject;
    this.index = index;
  }

  clearData(index:number){
     this.initFormData();
     this.index = index;
  }

  initFormData(){
    this.formData  = {
      name : '',
      email : '',
      message : '',
      subject :'',
      phoneNumber : ''
    };
  }
}
