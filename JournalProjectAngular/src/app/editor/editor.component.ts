import { Component } from '@angular/core';
import { ManuscriptcontentserviceService } from '../Services/manuscriptcontent/manuscriptcontentservice.service';
import { ManuscriptserviceService } from '../Services/manuscriptservice/manuscriptservice.service';

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
  constructor(private Services: ManuscriptserviceService) {}
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

  selectedReviewers(){

  }
}
