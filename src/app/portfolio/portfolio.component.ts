import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})

export class PortfolioComponent {
  constructor(private http: Http) {
    this.http
    .get("../../assets/portfolio.json")
    .subscribe(res => {
      this.portfolios = res.json();
    });
  }

  private portfolios: Object[] = [];
}
