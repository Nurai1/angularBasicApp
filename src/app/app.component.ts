import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UtilsService]
})
export class AppComponent implements OnInit {
  history: Array<object>;

  constructor(private http: HttpClient, private _utilsService: UtilsService) { }

  getHistory() {
    return this.http.get('assets/install_history.json')
      .subscribe((data: Array<object>) => this.history = Array.from(data));
  };

  ngOnInit(): void {
    this.getHistory();
  }
}
