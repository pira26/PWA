import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getChuckNorrisJokes() {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }

  getRonSwansonQuotes() {
    return this.httpClient.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }

  getYesOrNot() {
    return this.httpClient.get('https://yesno.wtf/api/');
  }

  getQuote() {
    return this.httpClient.get('https://talaikis.com/api/quotes/random/');
  }

  getDidYouKnow() {
    return this.httpClient.get('https://www.did-you-knows.com/');
  }
}
