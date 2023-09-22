import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  showTable2: boolean = false;

  toggleTable2() {
    this.showTable2 = !this.showTable2;
  }

}
