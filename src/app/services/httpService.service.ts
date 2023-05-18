import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class httpService {

  private apiMailUrl = 'https://formsubmit.co/info@memoautorepair.com';
  private pathTemplateInfo = 'assets/templatepage.json'

  private formData: any ={
    name : '',
    email : '',
    message : '',
    subject :'',
    phoneNumber : ''
  };

  constructor(private http: HttpClient) { 
    
  }

  sendEmail(email: any): Observable<any> {
    const data = {
      name: email.name,
      email: email.email,
      phoneNumber: email.phoneNumber,
      subject: email.subject,
      message: email.message,
      _template : 'table'
      
    };

    return this.http.post(this.apiMailUrl, data );
  }

  getInfoPage(): Observable<any>{
    return this.http.get(this.pathTemplateInfo) ;
  }

  getFormData(){
    return this.formData;
  }

  setFormData(formData:any){
    this.formData = formData ;
  }

}
