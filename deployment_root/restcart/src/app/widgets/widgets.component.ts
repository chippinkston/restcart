import { Component, OnInit } from '@angular/core';
import {Widget} from "../classes/widget";
import { WIDGETS} from "./mock-widgets";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html'
})

export class WidgetsComponent implements OnInit {

  widgets = WIDGETS;
  selectedWidget: Widget;

  constructor() { }

  ngOnInit() {
  }

  onSelect(widget: Widget): void {
    console.log(widget);
    console.log(this.widget);
    this.selectedWidget = this.widget;
    console.log('selected');
    console.log(this.selectedWidget);

  }

}
