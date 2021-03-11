import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'PASTE_API_KEY_HERE',
  databaseURL: 'PASTE_DATABASE_URL_HERE'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JustChat';

  constructor() {
    firebase.initializeApp(config);
  }
}
