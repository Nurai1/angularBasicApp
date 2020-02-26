import { Input, Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.sass'],
  providers: [UtilsService]
})
export class TreeViewComponent implements OnChanges, DoCheck, OnInit {
  @Input() treeReferencedHistory: Array<object>;
  treeSortedHistory: Array<object> =[];

  constructor(private svc: UtilsService) {}

  ngOnChanges(): void {
    this.treeSortedHistory = this.svc.makeCloneFromArray(this.treeReferencedHistory);
    this.svc.historySort(this.treeSortedHistory, "configStatus");

    this.svc.historyDateToString(this.treeReferencedHistory);
  }

  ngOnInit():void {
    this.svc.historySort(this.treeSortedHistory, "configStatus");
  }

  ngDoCheck():void {

  }
}
