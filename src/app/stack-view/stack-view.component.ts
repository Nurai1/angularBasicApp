import { Input, Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-stack-view',
  templateUrl: './stack-view.component.html',
  styleUrls: ['./stack-view.component.sass'],
  providers: [UtilsService]
})
export class StackViewComponent implements OnChanges, DoCheck, OnInit {
   @Input() stackReferencedHistory: Array<object>;
   editableHistory: Array<object> = [];
   stackSortedHistory: Array<object> = [];
   editModal: boolean = false;

  constructor(private svc: UtilsService) {}

  changeHistory() {
    for (let i=0; i<this.stackReferencedHistory.length; i++){
      this.stackReferencedHistory[i] = this.svc.makeClone(this.editableHistory)[i];
    }

    this.stackSortedHistory = this.svc.makeCloneFromArray(this.stackReferencedHistory);
    this.svc.historySort(this.stackSortedHistory, "installMethod");
  }

  ngOnChanges(): void {
    this.editableHistory = this.svc.makeCloneFromArray(this.stackReferencedHistory);
    this.stackSortedHistory = this.svc.makeCloneFromArray(this.stackReferencedHistory);

    this.svc.historySort(this.stackSortedHistory, "installMethod");
  }

  ngOnInit(): void {
    this.svc.historySort(this.stackSortedHistory, "installMethod");
  }

  ngDoCheck(): void {

  }
}
