import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  data: any;
  constructor() {
    this.data = [
      {
        id: 1,
        name: 'samir',
      },
      {
        id: 2,
        name: 'Aayush',
      },
      {
        id: 3,
        name: 'Piyush',
      },
      {
        id: 4,
        name: 'Aryan',
      },
    ];
  }

  ngOnInit(): void {}
}
