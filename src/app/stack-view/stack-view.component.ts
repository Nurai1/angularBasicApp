import { Input, Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-stack-view',
  templateUrl: './stack-view.component.html',
  styleUrls: ['./stack-view.component.sass']
})
export class StackViewComponent implements OnChanges, OnInit {
   @Input() stackReferencedHistory: Array<object>;
   editableHistory: Array<object> = [];
   stackSortedHistory: Array<object> = [];
   editModal: boolean = false;

  constructor(private _utilsService: UtilsService) {}

  changeHistory() {
    for (let i=0; i<this.stackReferencedHistory.length; i++){
      this.stackReferencedHistory[i] = this._utilsService.makeClone(this.editableHistory)[i];
    }

    this.stackSortedHistory = this._utilsService.makeCloneFromArray(this.stackReferencedHistory);
    this.stackSortedHistory = this._utilsService.historySort(this.stackSortedHistory, "installMethod");

    this._utilsService.setHistory(this.editableHistory);
  }

  ngOnChanges(): void {
    this.editableHistory = this._utilsService.makeCloneFromArray(this.stackReferencedHistory);
    this.stackSortedHistory = this._utilsService.makeCloneFromArray(this.stackReferencedHistory);
  }

  ngOnInit(): void {
    this.stackSortedHistory = this._utilsService.historySort(this.stackSortedHistory, "installMethod");
  }
}
