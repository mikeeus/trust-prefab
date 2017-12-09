import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'trust-catalog-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav;

  constructor(private media: ObservableMedia) {}

  ngOnInit() {}

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
