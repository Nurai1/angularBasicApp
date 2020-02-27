import { Input, Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.sass']
})
export class TreeViewComponent implements OnChanges, OnInit {
  @Input() treeReferencedHistory: Array<object>;
  public treeSortedHistory: Observable<object[]> = this._utilsService.getHistory();

  constructor(private _utilsService: UtilsService) { }

  ngOnChanges(): void {
    let treeInitialHistory = this._utilsService.makeCloneFromArray(this.treeReferencedHistory);
    this._utilsService.setHistory(treeInitialHistory);
    this._utilsService.historyDateToString(this.treeReferencedHistory);
  }

  ngOnInit():void {

  }
}
