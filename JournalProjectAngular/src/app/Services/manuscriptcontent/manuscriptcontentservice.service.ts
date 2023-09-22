import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManuscriptcontentserviceService {

  constructor(private http : HttpClient) { }
  savemanuscriptcontent(manuscriptcontentData: any) {
    return this.http.post('http://localhost:44303/api/ManuscriptContent/savemanuscriptcontent', manuscriptcontentData)
  }
  getmanuscriptcontentData() {
    return this.http.get('http://localhost:44303/api/ManuscriptContent/getmanuscriptcontentData')
  }
  Editmanuscriptcontent(data:any) {
    return this.http.post('http://localhost:44303/api/ManuscriptContent/Editmanuscriptcontent', data)
  }
  Deletemanuscriptcontent(id:any) {
    return this.http.get('http://localhost:44303/api/ManuscriptContent/DeletemanuscripData/' + id)
  }
}
