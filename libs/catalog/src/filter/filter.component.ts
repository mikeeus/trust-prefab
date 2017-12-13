import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  filter: FormGroup;
  options: Observable<string[]>;
  filteredOptions: Observable<string[]>;

  constructor(private store: Store<any>, private fb: FormBuilder) {}

  ngOnInit() {
    this.filter = this.fb.group({
      search: [''],
      floors: [],
      area: []
    });
    this.options = this.store.select(storeRoot.getHouseOptions);
    this.filteredOptions = this.filter.valueChanges.pipe(
      startWith(null),
      switchMap(val => {
        if (!val) {
          return this.options;
        }
        return this.options.pipe(map(options => this.filterFunction(options, val)));
      })
    );
  }

  filterFunction(options: string[], val: { search: string, floors: number, area: number[] }): string[] {
    return options.filter(option => option.toLowerCase().indexOf(val.search.toLowerCase()) !== -1);
  }
}
