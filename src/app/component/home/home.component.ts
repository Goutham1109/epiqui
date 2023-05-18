import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navbarBackgroundColor: string = '#A9A9A9';
  constructor() {}

  ngOnInit(): void {}
}
