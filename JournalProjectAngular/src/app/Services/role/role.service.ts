import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  

  

    constructor(private http:HttpClient) { }
  
    saverole(roleData: any) {
      return this.http.post('http://localhost:44303/api/Role/Saverole', roleData)
    }
    getroleData() {
    
      return this.http.get('http://localhost:44303/api/Role/GetroleData')
    }
    Editrole(data:any) {
      return this.http.post('http://localhost:44303/api/Role/Editrole', data)
    }
    Deleterole(id:any) {
      return this.http.get('http://localhost:44303/api/Role/deleteroleData/' + id)
    
    }
}
