import { Component, Input, OnInit } from '@angular/core'
import { httpService } from '../services/httpService.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [httpService]
})
export class ContactusComponent implements OnInit {

  formData: any ={
    name : '',
    email : '',
    message : '',
    subject :'',
    phoneNumber : ''
  };
  @Input() formDataService:any

  buttonvalue : string = 'Send';

  constructor(private mailService: httpService) {
  }

  ngOnInit(): void {
    if(this.formDataService != null){
      this.loadData();
    }
    
  }

  enviar() {
    this.buttonvalue = 'Sending ...'
    
    this.mailService.sendEmail(this.formData).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {console.info('complete')
      this.formData = {
        name : '',
        email : '',
        message : '',
        subject :'' ,
        phoneNumber : ''
      };
      this.buttonvalue  = 'Send';
    } 
    }); 
  }

  isFormValid(){
    if(this.formData.name != '' && this.formData.email != '' && this.formData.message != '' 
    && this.formData.subject != '' && this.formData.phoneNumber != null )  {
      return true
    }else return false
  }

  loadData(){
    this.formData = this.mailService.getFormData();
    this.formData = this.formDataService ; 
  }

}
