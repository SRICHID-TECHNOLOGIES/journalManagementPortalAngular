import { Component } from '@angular/core';
import { ManuscriptserviceService } from 'src/app/Services/manuscriptservice/manuscriptservice.service';
import { SubjectcontentService } from 'src/app/Services/subjectcontent/subjectcontent.service';

@Component({
  selector: 'app-subjectcontent',
  templateUrl: './subjectcontent.component.html',
  styleUrls: ['./subjectcontent.component.css']
})
export class SubjectcontentComponent {

  subjectcontent:any
  subjectcontentList: any = [];
  selectedSubjectID:any;
  save: boolean = true;
  edit: boolean = false;

  constructor(private Services:SubjectcontentService ,private sub:ManuscriptserviceService) {

  }
  ngOnInit() {
    this.getsubjectcontent();
  }
  savesubjectcontent() {
    this.save = true;
    this.edit = false;
    var subjectcontentData = {
      SubjectName: this.subjectcontent
    }
    this.sub.savesubjectcontent1(subjectcontentData).subscribe((result: any) => {
      if (result == "success") {
        alert("Saved successfully");
        window.location.reload();
      } else {
        alert("Somthing went wrong!!!")
        window.location.reload();

      }
    })
  }
  getsubjectcontent() {
    this.sub.getsubjectcontentData1().subscribe((result: any) => {
      this.subjectcontentList = result;
      console.log(this.subjectcontentList);
    })
  }
  Deletesubjectcontent(id:any) {
    this.Services. Deletesubjectcontent(id).subscribe((result : any )=>{
      if(result == 'success'){
        alert('Deleted successfully');
        window.location.reload();
      }else{
        alert("Somthing went wrong!!")
        window.location.reload();
      }
    })
}
updateRow(Data:any){
  this.save = false;
    this.edit = true;
  this.subjectcontent = Data.subjectName
  this. selectedSubjectID = Data.subjectID
}
  Editsubjectcontent() {
    
    var subjectcontentData = {
      SubjectID : this.selectedSubjectID,
      SubjectName: this.subjectcontent
    }
    this.Services.Editsubjectcontent(subjectcontentData).subscribe((result: any) => {
      if (result == "success") {
        alert("Updated successfully");
        window.location.reload();
      } else {
        alert("Somthing went wrong!!!")
        window.location.reload();
    }
  })
  }
}
