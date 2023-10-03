import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  plagiarismurl: any; // Declare plagiarismurl property
  current_url: SafeResourceUrl | undefined; // Declare current_url property as SafeResourceUrl
  wordUrl: any; // Declare wordUrl property
  closeResult: string | undefined; // Declare closeResult property
  ViewDoc: any;
  pdfUrl: any;

 
  FetchAuthorName: any;

  constructor(
    private manuscriptService: ManuscriptserviceService,
    private domSanitizer: DomSanitizer, // Inject DomSanitizer
    private modalService: NgbModal 
  )
  
  
  
  {
    if (localStorage.getItem('IsLoggedIn') === 'true') {
      this.IsLoggedIn = true;
      this.RegisterID = localStorage.getItem('RegisterID');
    }
  }
  

  ngOnInit() {
    this.getManusubmissionDetailsByRegisterID(); 
    this.getAuthorName();

    
  }

  getAuthorName() {
    this.manuscriptService.FetchAuthorName().subscribe((result: any) => {
      this.manuscriptcontentList = result;
      console.log(this.manuscriptcontentList);
    })
  }
 
  getManusubmissionDetailsByRegisterID() {
    this.manuscriptService.getManusubmissionDetailsByRegisterID( this.RegisterID).subscribe((result: any) => {
      this.manuscriptcontentList = result;
      console.log(this.manuscriptcontentList);
    })
  }


  ViewDocument(aa: any, pdftesting: any) {
    if (aa.pdfFile != null) {
      this.ViewDoc(aa);
    } else {
      this.plagiarismurl= aa.plagiarismurl;
      this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.plagiarismurl.file
      );
      console.log(this.pdfUrl);
      this.pdfUrl = this.plagiarismurl;
      this.modalService.open(pdftesting).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
    }
  }

}










