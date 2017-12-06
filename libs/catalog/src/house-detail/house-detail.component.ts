import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { House } from '@trust/models';
import * as storeRoot from 'apps/trust/src/app/store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'trust-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {
  house: Observable<House>;

  constructor(private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.house = this.route.params.pipe(
      switchMap(params => this.store.select(storeRoot.getHouse(params['model'])))
    );
  }
}
