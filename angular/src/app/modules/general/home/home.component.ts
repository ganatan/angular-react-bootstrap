import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  constructor(private meta: Meta) {
  }

  ngOnInit(): void {

    this.meta.updateTag(
      {
        name: 'description',
        content: 'This application was developed with Angular version 15.1.2 and bootstrap 5.2.3' +
          ' It applies Routing, Lazy loading, Server side rendering and Progressive Web App (PWA)'
      });

  }

}
