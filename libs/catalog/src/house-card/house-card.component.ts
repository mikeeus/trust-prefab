import { Component, Input, OnInit } from '@angular/core';
import { House } from '@trust/models';

@Component({
  selector: 'catalog-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {
  @Input() house: House;

  constructor() {}

  ngOnInit() {}
}
