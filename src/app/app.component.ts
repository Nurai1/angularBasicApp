import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  history: Array<object>;

  constructor(private http: HttpClient) {
  }

  getHistory() {
    return this.http.get('assets/install_history.json')
      .subscribe((data: Array<object>) => this.history = [ ...data ]);
  }

  ngOnInit(): void {
    this.getHistory();
  }
}
