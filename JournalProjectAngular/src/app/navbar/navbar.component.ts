import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  IsLoggedIn:any;
  email: any;
  RoleID: any;
  userName: any;
  constructor(private route:Router  )
  {
    if(localStorage.getItem("IsLoggedIn") == "true"){
      this.IsLoggedIn = true
      this.email = localStorage.getItem("Email")
      this.RoleID = localStorage.getItem("RoleID")
    this.userName=localStorage.getItem("UserName")
  }
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
}
