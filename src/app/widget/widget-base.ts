import {Directive, Input} from '@angular/core';
import {JsonExporterService} from '../services/json-exporter.service';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export class WidgetBase {
  @Input() widget ;
  onExportJson(): void {
    this.jsonExporterService.export();
  }

  constructor(private jsonExporterService: JsonExporterService) {
  }
}
