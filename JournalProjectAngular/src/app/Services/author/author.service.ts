import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  getmanuscriptcontentData() {
    return this.http.get('http://localhost:44303/api/Manuscript/getmanuscriptcontentData')
  }
  
}
