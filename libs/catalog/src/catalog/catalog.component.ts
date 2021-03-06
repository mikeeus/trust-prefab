import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

import * as storeRoot from 'apps/trust/src/app/store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'trust-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  houses: Observable<any[]>;

  constructor(private media: ObservableMedia, private store: Store<any>) {}

  ngOnInit() {
    this.houses = this.store.select(storeRoot.getHouses);
  }
}
