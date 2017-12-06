import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObservableMedia } from '@angular/flex-layout';

import * as storeRoot from 'apps/trust/src/app/store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'trust-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  houses: Observable<any[]>;

  constructor(private media: ObservableMedia, private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
    });
    this.houses = this.store.select(storeRoot.getHouses);
  }
}
