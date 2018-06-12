import { Component, OnInit } from '@angular/core';
import { TlahuiApi } from '@API/rest/tlahui-api';
import { Observable } from 'rxjs/internal/Observable';
import { Category, QueryOptions } from 'tlahui-webapi-client';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent implements OnInit {

  private api: TlahuiApi;
  private lista: Category[];

  constructor(tlahuiApi: TlahuiApi) {
    this.api = tlahuiApi;
  }


  ngOnInit() {
    this.GetList();
  }


  public GetList() {
    var q: QueryOptions;
    q=new QueryOptions();

    this.api.Get([],[],"",1,25).subscribe(data => {

      this.lista = data;

    })
  }

}
