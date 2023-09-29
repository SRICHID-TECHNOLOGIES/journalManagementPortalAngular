import { Component } from '@angular/core';
import { AuthorService } from '../Services/author/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  constructor(private Services:AuthorService) {

  }
  showTable2: boolean = false;
  manuscriptcontentList: any;

  toggleTable2() {
    this.showTable2 = !this.showTable2;
  }

 
}
