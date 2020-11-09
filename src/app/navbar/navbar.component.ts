import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toTopPage(): void {
    document.getElementById('page-top').scrollIntoView({behavior: 'smooth'});
  }
toCompanies(): void {
  document.getElementById('companies').scrollIntoView({block: 'start', behavior: 'smooth'});
}
toAboutUs(): void {
  document.getElementById('about-us').scrollIntoView({block: 'start', behavior: 'smooth'});
}
toContactUs(): void {
  document.getElementById('contact-us').scrollIntoView({block: 'start', behavior: 'smooth' });
}
}
