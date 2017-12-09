import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { ScrollService } from './scroll.service';

@Component({
  selector: 'trust-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private scrollService: ScrollService,
    public media: ObservableMedia
  ) { }

  ngOnInit() {
      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe((ev:any) => {
          if (ev instanceof NavigationStart) {
              if (ev.url !== this.lastPoppedUrl) {
                this.yScrollStack.push(window.scrollY);
              }
          } else if (ev instanceof NavigationEnd) {
              if (ev.url === this.lastPoppedUrl) {
                  this.lastPoppedUrl = undefined;
                  window.scrollTo(0, this.yScrollStack.pop());
              } else {
                this.scrollService.scrollToTop();
              }
          }
      });
  }
}
