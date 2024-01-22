import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetNumbersApiDataService {

  constructor(private http: HttpClient) { }

  getRandomNumber() : Observable<any> {
    let url = 'http://numbersapi.com/random/trivia?json'
    return this.http.get(url)
  }
}
