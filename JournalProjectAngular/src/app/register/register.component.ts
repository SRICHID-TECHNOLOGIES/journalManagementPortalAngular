import { Component } from '@angular/core';
import { RegisterService } from '../Services/Registration/register.service';
import { RoleService } from '../Services/role/role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registration: any;
  registrationtList: any = [];
  selectedregisteredID: any;
  FullName: any;
  ConfirmPassword: any;
  Phone: any;
  Email: any;
  Profession: any;
  Organisation: any;
  College: any;
  PostalAddress: any;
  Area: any;
  City: any;
  State: any;
  Role: any;
  Pincode: any;
  Password: any;

  userPassword: any;
    passwordsMatch: any;

    selectedrole: any;


  roleName:any ;
  route: any;

  RoleID: any;
  email: any;

// Set this based on your authentication logic
  roleList1: any[] = [ /* Define your role data here */ ];
  selectedRole: any;
  IsLoggedIn: boolean=false;
  
  constructor(
    private Services : RegisterService,
    private registersv : RegisterService, 
   private services:RoleService
   )
   {
   
    if(localStorage.getItem("IsLoggedIn") === "false"){
      this.IsLoggedIn = false;

      this.email = localStorage.getItem("Email");
      this.RoleID = localStorage.getItem("RoleID");
      this.roleName = localStorage.getItem("roleName");
      

    }


    
  }

 
  roleList: any = [];

  rolename: any;

 
  ngOnInit() {
    this.getregistration();
    this.getrole();
  }


  registerregistration() {
  
    if(this.Password != this.ConfirmPassword){
      alert("password does not match")
    }
   else if(this.Email == null || this.Email == undefined){23
      alert("Please enter the emailid")
    }
    else if(this.FullName == null || this.FullName == undefined){
      alert("Please enter the Name")
    }
    else if(this.Phone == null || this.Phone == undefined){
      alert("Please enter the PHONE NUMBER")
    }
   
    else if(this.Profession== null || this.Profession == undefined){
      alert("Please enter the Profession")
    }
    else if(this.Organisation== null || this.Organisation == undefined){
      alert("Please enter the Organisation")
    }
    else if(this.College== null || this.College == undefined){
      alert("Please enter the College Name")
  
    }
    else if(this.PostalAddress== null || this.PostalAddress == undefined){
      alert("Please enter the Postal Address")
    }
    else if(this.Area== null || this.Area == undefined){
      alert("Please enter the Area")
    }
    else if(this.City== null || this.City== undefined){
      alert("Please enter the City")
    }
    else if(this.State== null || this.City== undefined){
      alert("Please enter the State")
    }
    else if(this.Pincode== null || this.Pincode== undefined){
      alert("Please enter the Pincode")
    }
   
  
    

    else{

      if (this.IsLoggedIn==false )
      {
          this.roleName = "Author";
          this.selectedrole =2005// Set the role to "Author" by default
      }
      
      var registrationData = {
        FullName: this.FullName,
        Phone: this.Phone,
        Email: this.Email,
        Profession :this.Profession,
        Organisation:this.Organisation,
        College:this.College,
        PostalAddress :this.PostalAddress,
        Area:this.Area ,
        City :this.City ,
        State:this.State,
        Pincode:this.Pincode,
        RoleName:this.roleName,
        RoleID:this.selectedrole,
        
         Password:this.Password,
         ConfirmPassword:this.ConfirmPassword
      }
      this.registersv.registration(registrationData).subscribe((result: any) => {
        if (result == "success") {
          alert("Registered successfully");
          window.location.reload();
        } else {
          alert("Somthing went wrong!!!")
          window.location.reload();
    
        }
      })
    }
  



  }
  getregistration() {
    this.registersv.getregistrationData().subscribe((result: any) => {
      this.registrationtList = result;
      console.log(this.registrationtList);
    });
  }


  
  getrole() {
      this.services.getroleData().subscribe((result: any) => {
        this.roleList = result;
        console.log(this.roleList);
      })
      
    }
    onselectrole(event: any){
  this.selectedrole = parseInt(event.target.value)
     for(var i =0; i<this.roleList.length; i++ ){
  
      if( this.roleList[i].roleID == this.selectedrole){
         this.roleName = this.roleList[i].roleName;
      }
    }
  }
}
    