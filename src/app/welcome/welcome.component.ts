import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = 'Cześć!';
  welcome: string = 'Witaj w sklepie';
  enter: string = 'Wejdź';
}
