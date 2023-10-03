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
  userName: any;
  roleName: any;
  
  constructor(private  Services:LoginserviceService ,private router:Router){
    if(localStorage.getItem("IsLoggedIn") == "true"){
      this.IsLoggedIn = true
      
      this.email = localStorage.getItem("Email")
      this.RoleID = localStorage.getItem("RoleID")
    this.userName=localStorage.getItem("UserName")

    this.roleName=localStorage.getItem("roleName")
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
   
    var login1 = {
      Email: this.FullName,
      Password:this.password,


    }
    this.Services.savelogin(login1).subscribe((result: any) => {
      if (result !="fail") {
        localStorage.setItem('token', result.token);
        localStorage.setItem('Email', result.email);
        localStorage.setItem('UserName', result.fullName);
        localStorage.setItem('RoleID', result.roleID);
        localStorage.setItem('RegisterID', result.registerID);
      
        localStorage.setItem('IsLoggedIn', 'true');
        this.router.navigate(['/home']).then(()=>{
          window.location.reload()
        })
      } else {
        alert("Invalid credentials!!!")
        window.location.reload();

      }
    })
  }


}
