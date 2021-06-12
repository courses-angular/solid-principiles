import {Component, OnInit} from '@angular/core';
import {Reloadable, WidgetModel} from '../widget-model';

@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.scss']
})
export class WeatherContentComponent implements OnInit, WidgetModel, Reloadable {
  id: string;
  liveReloading: boolean;

  // @ts-ignore
  reload(): void {
    console.log('Reloading');
  }


  constructor() {
  }

  ngOnInit(): void {
  }


}
