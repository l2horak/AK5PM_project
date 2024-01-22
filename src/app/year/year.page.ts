import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {

  year: string = ''
  output: string = ""

  constructor() { }

  ngOnInit() {
  }

  searchYear(){
    this.output = "clicked"
  }
}
