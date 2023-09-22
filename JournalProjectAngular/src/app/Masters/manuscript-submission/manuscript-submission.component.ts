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
  tableLength: any;
  year: any;
  currentMonth: any;
  constructor(private Services:ManuscriptserviceService,private httpService:HttpClient){
  }
  ngOnInit() {
    this.getsubjectcontent();
    this.getmanuscriptcontent(); this.getmanuscriptid();

  }

  getmanuscriptid() {
    this.Services.FetchManuscriptNumber().subscribe((result: any) => {
      this.tableLength=0;
      this.tableLength = (this.tableLength + 1).toString().padStart(3, '0');
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
    frmData.append('ManuscriptNo', this.ManuscriptNo);
    frmData.append('Subject', this.selectedSubjectContent);
    frmData.append('Title', this.Titles);
    frmData.append('ManuscriptType', this.selectedManuscriptContent);
    frmData.append('Abstract', this.Abstract);
    

     this.httpService.post('http://localhost:44303/api/Manuscript/Fileupload',frmData).subscribe((data: any) => {
        if (data == 'success') {
          alert('Saved Successfully');
        } else {
          alert('Something went wrong!!');
        }
      });
}
 

  onclick(){
    // const onsubmit:abc={
    //   Userid:this.userid,
    //   ManuscriptNo:this.ManuscriptNo,
    //   Subject:this.Subjects,
    //   Title:this.Titles,
    //   ManuscriptType:this.ManuscriptType,
    //   Abstract:this.Abstract,
    //   CreatedOn:this.CreatedOn,

    // }
    const frmData = new FormData();
    frmData.append('FileBlobLink', this.docs);
    frmData.append('ManuscriptNo', this.ManuscriptNo);
    frmData.append('Subject', this.selectedSubjectContent);
    frmData.append('Title', this.Titles);
    frmData.append('ManuscriptType', this.selectedManuscriptContent);
    frmData.append('Abstract', this.Abstract);
    this.Services.postsavedata(frmData).subscribe((data:any)=>{
      if(data=="success"){
        alert("Saved successfully");
      }

      console.log(data)
    }
    );
    console.log(onsubmit)
  }
}
