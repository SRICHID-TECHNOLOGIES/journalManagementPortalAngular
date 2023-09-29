import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ManuscriptserviceService } from 'src/app/Services/manuscriptservice/manuscriptservice.service';

@Component({
  selector: 'app-manuscript-submission',
  templateUrl: './manuscript-submission.component.html',
  styleUrls: ['./manuscript-submission.component.css']
})
export class ManuscriptSubmissionComponent {

  CreatedOn: any;
  files2: any;
  docs: any;
  userid: any;
  ManuscriptNo: any;
  Subjects: any;
  Titles: any;
  ManuscriptType: any;
  Abstract: any;
  subjectcontentList: any;
  selectedSubjectContent: any;
  selectedManuscriptContent: any;
  manuscriptcontentList: any;
  tableLength: any = [];
  year: any;
  currentMonth: any;
  undertakingdocs: any;
  files3: any;
  files4: any;
  manuscriptdocs: any;
  len: any;
  IsLoggedIn: any;
  email: any;
  RoleID: any;
  userName: any;
  RegisterID: any;
  constructor(private Services:ManuscriptserviceService,private httpService:HttpClient){
    if(localStorage.getItem("IsLoggedIn") == "true"){
      this.IsLoggedIn = true
      
      this.email = localStorage.getItem("Email")
      this.RoleID = localStorage.getItem("RoleID")
    this.userName=localStorage.getItem("UserName")
    this.RegisterID=localStorage.getItem("RegisterID")

    
  }
  }
  ngOnInit() {
    this.getsubjectcontent();
    this.getmanuscriptcontent(); this.getmanuscriptid();
  }

  getmanuscriptid() {
    this.Services.FetchManuscriptNumber().subscribe((result: any) => {
      this.tableLength = (result.length + 1).toString().padStart(3, '0');
      const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      this.currentMonth = monthNames[new Date().getMonth()];
      this.year = new Date().getFullYear();
      this.ManuscriptNo= this.year+this.currentMonth+this.tableLength;
    })
  }
  

  onselectdoc(event: any) {
    var fileslist2 = '';
    this.files2 = [].slice.call(event.target.files);
    fileslist2 = this.files2[0];
    this.docs = fileslist2;
  }

  onselectUndertakingform(event: any) {
    var fileslist3 = '';
    this.files3 = [].slice.call(event.target.files);
    fileslist3 = this.files3[0];
    this.undertakingdocs = fileslist3;
  }

  onselectpdf(event: any) {
    var fileslist4 = '';
    this.files4 = [].slice.call(event.target.files);
    fileslist4 = this.files4[0];
    this.manuscriptdocs = fileslist4;
  }

  getsubjectcontent() {
    this.Services.getsubjectcontentData1().subscribe((result: any) => {
      this.subjectcontentList = result;
      console.log(this.subjectcontentList);
    })
  }

   getmanuscriptcontent() {
    this.Services.getmanuscriptcontentData().subscribe((result: any) => {
      this.manuscriptcontentList = result;
      console.log(this.manuscriptcontentList);
    })   
  }

  onSelectManucriptContent(data:any){
    this.selectedManuscriptContent = parseInt(data.target.value)
  }

  onSelectSubjectContent(data:any){
this.selectedSubjectContent = parseInt(data.target.value)
  }

  fileupload(){
    const frmData = new FormData();
    frmData.append('FileBlobLink', this.docs);
    frmData.append('UndertakingFileBlobLink', this.undertakingdocs);
    frmData.append('ManuscriptPDFLink', this.manuscriptdocs);
    frmData.append('ManuscriptNo', this.ManuscriptNo);
    frmData.append('Subject', this.selectedSubjectContent);
    frmData.append('Title', this.Titles);
    frmData.append('ManuscriptType', this.selectedManuscriptContent);
    frmData.append('Abstract', this.Abstract);
    frmData.append('Email', this.email);
    frmData.append('RegisterID', this.RegisterID);
    
     this.httpService.post('http://localhost:44303/api/Manuscript/Fileupload',frmData).subscribe((data: any) => {
        if (data == 'success') {
          alert('Saved Successfully');
          window.location.reload();
        } else {
          alert('Something went wrong!!');
        }
      });
}
 

  // onclick(){
  //   // const onsubmit:abc={
  //   //   Userid:this.userid,
  //   //   ManuscriptNo:this.ManuscriptNo,
  //   //   Subject:this.Subjects,
  //   //   Title:this.Titles,
  //   //   ManuscriptType:this.ManuscriptType,
  //   //   Abstract:this.Abstract,
  //   //   CreatedOn:this.CreatedOn,

  //   // }
  //   const frmData = new FormData();
  //   frmData.append('FileBlobLink', this.docs);
  //   frmData.append('UndertakingFileBlobLink', this.undertakingdocs);
  //   frmData.append('ManuscriptPDFLink', this.manuscriptdocs);
  //   frmData.append('ManuscriptNo', this.ManuscriptNo);
  //   frmData.append('Subject', this.selectedSubjectContent);
  //   frmData.append('Title', this.Titles);
  //   frmData.append('ManuscriptType', this.selectedManuscriptContent);
  //   frmData.append('Abstract', this.Abstract);
  //   frmData.append('RegisterID', this.RegisterID);
  //   this.Services.postsavedata(frmData).subscribe((data:any)=>{
  //     if(data=="success"){
  //       alert("Saved successfully");
  //     }

  //     console.log(data)
  //   }
  //   );
  //   console.log(onsubmit)
  // }
}
