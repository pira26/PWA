import {Component, OnInit} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'APIS for PWA app';
  text: any;

  constructor (private updates: SwUpdate, private data: DataService) {
    this.updates.available
      .subscribe(() => {
        // this.update = true;
        this.updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
  }

  getChuckNorrisJoke() {
    this.data.getChuckNorrisJokes().subscribe((joke) => this.text = joke);
    console.log('text', this.text);
  }

  getRonSwansonQuote() {
    this.data.getRonSwansonQuotes().subscribe((quote) => this.text = quote);
    console.log('text', this.text);
  }

  getYesOrNot() {
    this.data.getYesOrNot().subscribe((res) => this.text = res);
    console.log('text', this.text);
  }

  getQuote() {
    this.data.getQuote().subscribe((quote) => this.text = quote);
    console.log('text', this.text);
  }

  getDidYouKnow() {
    this.data.getDidYouKnow().subscribe((quote) => this.text = quote);
    console.log('text', this.text);
  }

}
