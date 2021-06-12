import {Component, Input, OnInit} from '@angular/core';
import {JsonExporterService} from '../services/json-exporter.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() widget ;

  constructor(private jsonExporterService: JsonExporterService) {
  }

  ngOnInit(): void {
  }

  onExportJson(): void {
    this.jsonExporterService.export();
  }
}
