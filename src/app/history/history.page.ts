import { Component, OnInit } from '@angular/core';
import { HistoryStorageService } from '../services/history-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  storedData: Array<any> = []

  constructor(private storage: HistoryStorageService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    const storedData = await this.storage.get('history')
    if(storedData){
      this.storedData = JSON.parse(storedData)
    }
  }
}
