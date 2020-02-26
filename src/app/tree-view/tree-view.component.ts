import { Input, Component, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.sass']
})
export class TreeViewComponent implements OnChanges, DoCheck {
   @Input() treeReferencedHistory: Array<object>;

  constructor() {}

  treeReferencedHistorySort(){
    if (this.treeReferencedHistory === undefined) return;
    this.treeReferencedHistory.sort((item1: object, item2: object) =>{
      if (item1["configStatus"] < item2["configStatus"]) {
        return -1;
      }
      if (item1["configStatus"] > item2["configStatus"]) {
        return 1;
      }
      return 0;
    })
  }

  histroryDateToString(){
    for (let item of this.treeReferencedHistory){
      item['date'] = (new Date(item['date'])).toDateString();
    }
  }

  ngOnChanges(): void {
    this.treeReferencedHistorySort();
    this.histroryDateToString();
  }
  ngDoCheck():void {
    this.treeReferencedHistorySort();
  }
}
