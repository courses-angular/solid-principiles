import {Component, OnInit} from '@angular/core';
import {WidgetModel} from '../widget-model';

@Component({
  selector: 'app-velocity-content',
  templateUrl: './velocity-content.component.html',
  styleUrls: ['./velocity-content.component.scss']
})
export class VelocityContentComponent implements WidgetModel, OnInit {
  id: string = '';
  constructor() {
  }
  ngOnInit(): void {
  }

}
