import { Component } from '@angular/core';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent {
  showTable2: boolean = false;

  toggleTable2() {

    
   // this.showTable2 = !this.showTable2;
  }

}
