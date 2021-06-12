import {Component, Input, OnInit} from '@angular/core';
import {JsonExporterService} from '../services/json-exporter.service';
import {WidgetBase} from './widget-base';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})


export class WidgetComponent extends WidgetBase implements OnInit {
@Input()widget;

  constructor(jsonExporterService: JsonExporterService) {
    super(jsonExporterService);

  }

  ngOnInit(): void {
  }
  onExportJson(): void {
    super.onExportJson();
  }


}
