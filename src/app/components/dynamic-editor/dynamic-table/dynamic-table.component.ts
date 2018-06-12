import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  rows: any[];
  loadingIndicator = true;
  reorderable = true;

  constructor() { }

  ngOnInit() {
  }

}
