import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../Services/Login/loginservice.service';
import { ManuscriptserviceService } from '../Services/manuscriptservice/manuscriptservice.service';

@Component({
  selector: 'app-authorindividualsubmissions',
  templateUrl: './authorindividualsubmissions.component.html',
  styleUrls: ['./authorindividualsubmissions.component.css']
})
export class AuthorindividualsubmissionsComponent {

  IsLoggedIn: boolean = false;
  RegisterID: any;
  // This will hold the manuscript submission details
  manuscriptcontentList: any;

 

  constructor(
    private manuscriptService: ManuscriptserviceService,
    
  )
  
  
  
  {
    if (localStorage.getItem('IsLoggedIn') === 'true') {
      this.IsLoggedIn = true;
      this.RegisterID = localStorage.getItem('RegisterID');
    }
  }
  

  ngOnInit() {
    this.getManuscriptDetailsByRegisterid(); 
  }
 
  getManuscriptDetailsByRegisterid() {
    this.manuscriptService.getManusubmissionDetailsByRegisterID( this.RegisterID).subscribe((result: any) => {
      this.manuscriptcontentList = result;
      console.log(this.manuscriptcontentList);
    })
  }
}










// showTable2: boolean = false;

// oggleTable2() {
//   this.showTable2 = !this.showTable2;
// }
// author-dashboard.component.ts
