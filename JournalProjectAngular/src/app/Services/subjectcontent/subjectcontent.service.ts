import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectcontentService {

  constructor(private http:HttpClient) { }

  savesubjectcontent(subjectcontentData: any) {
    return this.http.post('http://localhost:44303'+'/api/SubjectContent/Savesubjectcontent', subjectcontentData)
  }
  getsubjectcontentData() {
  
    return this.http.get('http://localhost:44303/api/SubjectContent/GetsubjectcontentData')
  }
  Editsubjectcontent(data:any) {
    return this.http.post('http://localhost:44303/api/SubjectContent/Editsubjectcontent', data)
  }
  Deletesubjectcontent(id:any) {
    return this.http.get('http://localhost:44303/api/SubjectContent/deletesubjectcontentData/' + id)
  
  }
}
