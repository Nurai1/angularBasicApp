import { Input, Component, OnChanges, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stack-view',
  templateUrl: './stack-view.component.html',
  styleUrls: ['./stack-view.component.sass']
})
export class StackViewComponent implements OnChanges, DoCheck {
   @Input() stackReferencedHistory: Array<object>;
   editableHistory: Array<object> = [];
   sortedHistory: Array<object> = [];
   editModal: boolean = false;

  constructor() {}

  changeHistory() {
    for (let i=0; i<this.stackReferencedHistory.length; i++){
      this.stackReferencedHistory[i] = this.makeClone(this.editableHistory[i]);
      this.sortedHistory[i] = this.makeClone(this.stackReferencedHistory[i]);
    }
  }

  makeClone(obj) {
    if (obj instanceof Array){
      let clone = [];
      for (let i=0; i < obj.length; i++){
        if ("object"===typeof obj[i])
          clone[i] = this.makeClone(obj[i]);
        else
          clone[i] = obj[i];
      }
      return clone;
    }
    let clone = {};
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if ("object"===typeof obj[prop])
          clone[prop] = this.makeClone(obj[prop]);
        else
          clone[prop] = obj[prop];
      }
    }
    return clone;
  }

  stackReferencedHistorySort(){
    if (this.sortedHistory === undefined) return;
    this.sortedHistory.sort((item1: object, item2: object) =>{
      if (item1["installMethod"] < item2["installMethod"]) {
        return -1;
      }
      if (item1["installMethod"] > item2["installMethod"]) {
        return 1;
      }
      return 0;
    })
  }

  ngOnChanges(): void {
    this.stackReferencedHistorySort();

    for (let i=0; i<this.stackReferencedHistory.length; i++){
      this.editableHistory[i] = this.makeClone(this.stackReferencedHistory[i]);
      this.sortedHistory[i] = this.makeClone(this.stackReferencedHistory[i]);
    }
  }

  ngDoCheck(): void {
    this.stackReferencedHistorySort();
  }
}
