import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviewerpage',
  templateUrl: './reviewerpage.component.html',
  styleUrls: ['./reviewerpage.component.css']
})
export class ReviewerpageComponent {
 
    // Set the FullName property with an actual value
    Titles: any; // Define the Titles property with the appropriate type (string in this case)
    FullName: any;
  
  registerID: any;
  constructor(
    private router: ActivatedRoute) 
    
    {
    this.router.params.subscribe((data: any) => {
      if (data) {
        this.registerID = data['id']
      }
    })
  }
}
