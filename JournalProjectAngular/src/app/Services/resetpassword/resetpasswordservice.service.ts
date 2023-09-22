import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordserviceService {

  constructor(private http:HttpClient) { }

  checkEmailExists(Email :any ){
    return this.http.post('http://localhost:44303/api/Registration/CheckEmailMatch', Email)
  }
  // getEmailid(){
  //   return this.http.get('http://localhost:44303/api/Registration/getEmailid')
  // }
  SavePassword(passworddata: any) {
    return this.http.post('http://localhost:44303/api/Registration/SavePassword', passworddata)
  }
}
