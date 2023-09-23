import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  getroleData: any;

  constructor(private http:HttpClient) { }

  getregistrationData() {
    return this.http.get('http://localhost:44303/api/Registration/getregistrationData/')
  }
  
  registration(registrationData: any) {
    return this.http.post('http://localhost:44303/api/Registration/registerregistration/', registrationData)
  }



}
