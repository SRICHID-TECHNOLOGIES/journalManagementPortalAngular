import { Component } from '@angular/core';
import { ManuscriptcontentserviceService } from '../Services/manuscriptcontent/manuscriptcontentservice.service';
import { ManuscriptserviceService } from '../Services/manuscriptservice/manuscriptservice.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
manuscriptcontentList: any;

 constructor(private Services:ManuscriptserviceService){
  
 }
 ngOnInit() {
  this.getmanuscriptcontent();
 }
 getmanuscriptcontent() {
  this.Services.getmanuscriptsubmissionData().subscribe((result: any) => {
    this.manuscriptcontentList = result;
    console.log(this.manuscriptcontentList);
  })   
}
}