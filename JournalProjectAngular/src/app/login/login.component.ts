import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../Services/Login/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  IsLoggedIn: boolean=false;
  FullName: any;
  email: any;
  RoleID: any;
  password:any;
  route: any;
  getlogin: any;
  
  constructor(private  Services:LoginserviceService , route : Router){
    if(localStorage.getItem("IsLoggedIn") == "true"){
      this.IsLoggedIn = true
      
      this.password = localStorage.getItem("password")
      this.email = localStorage.getItem("email")
      this.RoleID = localStorage.getItem("RoleId")
    

    
  }
  
   }
  ngOnInit(): void {
  }


  logout(){
    this.IsLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('token')
    this.route.navigate(['/']).then(()=>{
      window.location.reload();
    }
    )
  }


  login() {
   
    var login = {
      Email: this.FullName,
      Password:this.password

    }
    this.Services.savelogin(login).subscribe((result: any) => {
      if (result !="fail") {
        alert("login successfully");
        window.location.reload();
      } else {
        alert("Invalid credentials!!!")
        window.location.reload();

      }
    })
  }


}
