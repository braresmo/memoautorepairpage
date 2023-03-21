import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  resp:any;
constructor(private http : HttpClient) { 
  this.http.get<any>('assets/templatepage.json').subscribe(
    data => this.resp = data
  );
}
public getResp(){
 
}

}
