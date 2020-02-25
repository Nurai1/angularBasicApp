import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.sass']
})
export class DatagridComponent implements OnInit {
  @Input() dataGridHistory: Array<object>;
  constructor() { }

  ngOnInit(): void {
  }

}