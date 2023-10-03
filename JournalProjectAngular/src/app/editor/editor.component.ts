import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer
import { ManuscriptserviceService } from '../Services/manuscriptservice/manuscriptservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  manuscriptcontentList: any;
  manuscriptcontentData: any;
  manuscriptNo: any;
  tableView : boolean=true;
  contentView: boolean=false;
  reviewerView: boolean=false;
  subject: any;
  title: any;
  manuscriptType: any;
  abstract: any;
  createdOn: any;
  plagiarismurl: any;
  undertakingdocurl: any;
  plagiarismdocname: any;
  titleID: any;
  manuscriptPDF: any;
  undertakingDocName: any;
  manuscriptPDFName: any;
  registerID: any;
  reviewerList: any;
  reviewer1: any;
  reviewer2: any;
  reviewer3: any;
 

  current_url: SafeResourceUrl | undefined; // Declare current_url property as SafeResourceUrl
  wordUrl: any; // Declare wordUrl property
  closeResult: string | undefined; // Declare closeResult property
  ViewDoc: any;
  pdfUrl: any;


  constructor(
    private Services: ManuscriptserviceService,
    private domSanitizer: DomSanitizer, // Inject DomSanitizer
    private modalService: NgbModal // Inject NgbModal
  ) {}
  
  ngOnInit() {
    this.getmanuscriptcontent();
  }

  getmanuscriptcontent() {
    this.Services.getmanuscriptsubmissionData().subscribe((result: any) => {
      this.manuscriptcontentList = result;
      console.log(this.manuscriptcontentList);
    });
  }

  getmanuscriptcontentdata(data: any) {
    this.manuscriptNo = data.manuscriptNo;
    this.subject = data.subject;
    this.title = data.title;
    this.manuscriptType = data.manuscriptType;
    this.abstract = data.abstract;
    this.createdOn = data.createdOn;
    this.plagiarismurl = data.plagiarismurl;
    this.undertakingdocurl = data.undertakingdocurl;
    this.plagiarismdocname = data.plagiarismdocname;
    this.titleID = data.titleID;
    this.manuscriptType = data.manuscriptType;
    this.manuscriptPDF = data.manuscriptPDF;
    this.undertakingDocName = data.undertakingDocName;
    this.manuscriptPDFName = data.manuscriptPDFName;
    this.registerID = data.registerID;

    this.contentView=true
    this.tableView=false
    this.reviewerView=false
  }

  selectedReviewers(){
    var reviewerData = {
      Reviewer1 : this.reviewer1,
      Reviewer2 : this.reviewer2,
      Reviewer3 : this.reviewer3,
      manuscriptNo: this.manuscriptNo,
      subject: this.subject,
      title: this.title,
      createdOn : this.createdOn,
      manuscriptPDFName : this.manuscriptPDFName,
      manuscriptPDF : this.manuscriptPDF

    } 
    this.Services.saveReviewers(reviewerData).subscribe((result: any) => {
      if (result == "success") {
        alert("Saved successfully");
        window.location.reload();
      } else {
        alert("Somthing went wrong!!!")
        window.location.reload();

      }
    })
  }

  getreviewersList() {
    this.Services.getReviewerList().subscribe((result: any) => {
      this.reviewerList = result;
      this.contentView=true;
      this.reviewerView=true;
      console.log(this.reviewerList);
    });
  }

  onSelectReviewer1(data: any) {
    this.reviewer1 = parseInt(data.target.value);
  }

  onSelectReviewer2(data: any) {
    if(data.target.value == this.reviewer1){
      alert("Reviewer is already selected");
    }else{
      this.reviewer2 = parseInt(data.target.value);
    }
  }
  onSelectReviewer3(data: any) {
    if( data.target.value == this.reviewer1 && data.target.value == this.reviewer2){
      alert("Reviewer is already selected");
    }else{
      this.reviewer3 = parseInt(data.target.value);
    }    
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
