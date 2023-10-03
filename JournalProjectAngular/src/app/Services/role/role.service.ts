import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  

  

    constructor(private http:HttpClient) { }
  
    saverole(roleData: any) {
      return this.http.post('http://localhost:44303/api/role/Saverole', roleData)
    }
    getroleData() {
      return this.http.get('http://localhost:44303/api/role/GetroleData')
    }
    Editrole(data:any) {
      return this.http.post('http://localhost:44303/api/role/Editrole', data)
    }
    Deleterole(id:any) {
      return this.http.get('http://localhost:44303/api/role/deleteroleData/' + id)
    
    }
}
