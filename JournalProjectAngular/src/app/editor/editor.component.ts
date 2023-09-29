import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer
import { ManuscriptserviceService } from '../Services/manuscriptservice/manuscriptservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  manuscriptcontentList: any;
  plagiarismurl: any; // Declare plagiarismurl property
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
