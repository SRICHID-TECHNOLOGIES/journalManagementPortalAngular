import { Component } from '@angular/core';
import { ResetpasswordserviceService } from 'src/app/Services/resetpassword/resetpasswordservice.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent {
  ConfirmPassword: boolean = true;
  password: any;
  Email: any;
  showpassword: boolean = false;
  constructor(private Services: ResetpasswordserviceService){
  }

  // ngOnInit(){
  //   this.getEmailid();
  // }

  // onEmailChange(password:any){
  //   console.log()
  // }

  onSelectEmail(data1:any ){
  

    this.Email=(data1)
    var data ={
      Email : this.Email
    }
    this.Services.checkEmailExists(data).subscribe((exists: any) => {
      if(exists=="yes")
      {
        this.showpassword = true;
        this.ConfirmPassword=false;
          } else
          {
          alert("User doesn't exist");
          window.location.reload();
          }
    });
  }

  // submitEmail(){
  //   var data ={
  //     Email : this.Email
  //   }
  //   this.Services.checkEmailExists(data).subscribe((exists: any) => {
  //     if(exists=="yes")
  //     {
  //         alert ("Password match");
  //         console.log(data);
  //         } else
  //         {
  //         alert("password doesn't match");
  //         }
  //   });
  // }

  // getEmailid() {
  //   this.Services.getEmailid().subscribe((result : any) => {
  //     this.Email = result;
  //     console.log(this.Email);
  //   })
  // }

  SaveChanges(){

  var passworddata = {
    Email:this.Email,
    password:this.password,
  }
    this.Services.SavePassword(passworddata).subscribe((result:any) => {
      if (result == "success") {
        alert("Saved successfully");
        console.log(passworddata);
      } else {
        alert("Somthing went wrong!!!")
        window.location.reload();
      }
    })
}

}
