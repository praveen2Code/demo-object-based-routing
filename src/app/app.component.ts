import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

 navbarData: any = [
    {
      "title": "Home",
      "link": "/home"
    },
    {
      "title": "About",
      "link": "/about"
    },
    {
      "title": "Services",
      "subItems": [
        {
          "title": "Service 1",
          "link": "/services/service1"
        },
        {
          "title": "Service 2",
          "link": "/services/service2"
        }
      ]
    }
  ]

  constructor() {

  }

}
