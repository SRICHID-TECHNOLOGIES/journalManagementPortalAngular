import { Component } from '@angular/core';
import { ManuscriptcontentserviceService } from 'src/app/Services/manuscriptcontent/manuscriptcontentservice.service';

@Component({
  selector: 'app-manuscriptcontent',
  templateUrl: './manuscriptcontent.component.html',
  styleUrls: ['./manuscriptcontent.component.css']
})
export class ManuscriptcontentComponent {

  manuscriptcontent:any
  manuscriptcontentList: any = [];
  selectedManuscriptID:any;
  save: boolean = true;
  edit: boolean = false;

  constructor(private Services:ManuscriptcontentserviceService) {

  }
  ngOnInit() {
    this.getmanuscriptcontent();
  }
  savemanuscriptcontent() {
    this.save = true;
    this.edit = false;
    var manuscriptcontentData = {
      ManuscriptName: this.manuscriptcontent
    }
    this.Services.savemanuscriptcontent(manuscriptcontentData).subscribe((result: any) => {
      if (result == "success") {
        alert("Saved successfully");
        window.location.reload();
      } else {
        alert("Somthing went wrong!!!")
        window.location.reload();

      }
    })
  }
  getmanuscriptcontent() {
    this.Services.getmanuscriptcontentData().subscribe((result: any) => {
      this.manuscriptcontentList = result;
      console.log(this.manuscriptcontentList);
    })
    
  }
  Deletemanuscriptcontent(id:any) {
    this.Services.Deletemanuscriptcontent(id).subscribe((result : any )=>{
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
  this.manuscriptcontent = Data.manuscriptName
  this. selectedManuscriptID = Data.manuscriptID
}
  Editmanuscriptcontent() {
    var manuscriptcontentData = {
      manuscriptID : this.selectedManuscriptID,
      manuscriptName: this.manuscriptcontent
    }
    this.Services.Editmanuscriptcontent(manuscriptcontentData).subscribe((result: any) => {
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
