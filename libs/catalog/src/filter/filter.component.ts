import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as storeRoot from 'apps/trust/src/app/store/index';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import { map, switchMap, filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'trust-catalog-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options: Observable<string[]>;
  filteredOptions: Observable<string[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.options = this.store.select(storeRoot.getHouseOptions);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(null),
      switchMap(val => {
        if (!val) {
          return this.options;
        }
        return this.options.pipe(map(options => this.filter(options, val)));
      })
    );
  }

  filter(options: string[], val: string): string[] {
    return options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }
}
