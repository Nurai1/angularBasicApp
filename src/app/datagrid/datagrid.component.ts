import { Input, Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html'
})
export class DatagridComponent implements OnInit {
  @Input() datagridReferencedHistory: Array<object>;
  constructor() { }

  ngOnInit(): void {
  }

}
