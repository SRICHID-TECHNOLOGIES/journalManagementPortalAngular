import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
interface LoginResponse{token:string}
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginFailed: any;
  email: any;
  password: any;

  constructor(private http:HttpClient, private router:Router) { }
 
  login(){
    this.http.post<LoginResponse>('http://localhost:44303/api/Login/Signin',{username:this.email, password:this.password}).subscribe(
      (response:any)=>{
        if(response == "fail"){
          this.loginFailed = "Invalid Credentials!!!"
        }else{
          localStorage.setItem('token', response.token);
          localStorage.setItem('UserName', response.userName);
          localStorage.setItem('UserID',response.userId);
          localStorage.setItem('Role', response.roleId);
          localStorage.setItem('IsLoggedIn', 'true');
          this.router.navigate(['/dashboard']).then(()=>{
            window.location.reload()
          })

        }
      }
    )
        }
  savelogin(loginData: any) {
    return this.http.post('http://localhost:44303/api/Login/Signin', loginData)
  }
}
