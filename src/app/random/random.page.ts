import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetNumbersApiDataService } from '../services/get-numbers-api-data.service';
import { HistoryStorageService } from '../services/history-storage.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  numbersRandomOutput$: Observable<any> = this.apiService.getRandomNumber()
  displayData: string = "42 is the answer to the Ultimate Question of Life, the Universe, and Everything."
  historyArray: Array<string> = []

  constructor(private apiService: GetNumbersApiDataService, private storage: HistoryStorageService) { }

  ngOnInit() {
  }

  generateRandom(){
    this.numbersRandomOutput$.subscribe(data => {
      this.displayData = data.text
      this.historyArray.unshift(data.text)
      this.storage.set('history', JSON.stringify(this.historyArray))
    })
  }
}
