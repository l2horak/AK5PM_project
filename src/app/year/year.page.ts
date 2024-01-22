import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetNumbersApiDataService } from '../services/get-numbers-api-data.service';
import { HistoryStorageService } from '../services/history-storage.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {

  year: string = ''
  numbersYearOutput$: Observable<any> = this.apiService.getYear("")
  displayData: string = ""
  displayYear: string = ""
  historyArray: Array<string> = []

  constructor(private apiService: GetNumbersApiDataService, private storage: HistoryStorageService) { }

  ngOnInit() {
  }

  searchYear(){
    if(this.year != ''){
      this.numbersYearOutput$ = this.apiService.getYear(this.year)
      this.numbersYearOutput$.subscribe(data => {
        this.displayData = data.text
        this.displayYear = data.number
        this.historyArray.unshift(data.text)
        this.storage.set('history', JSON.stringify(this.historyArray))
      })
    } 
  }
}
