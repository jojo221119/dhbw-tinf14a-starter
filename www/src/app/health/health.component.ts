import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { HealthService } from "./health.service";
import { EmitterService } from "../emitter.service";


@Component({
  selector: 'health',  // <home></home>
  providers: [
    HealthService
  ],
  styleUrls: [ './health.component.css' ],
  templateUrl: './health.component.html'
})
export class HealthComponent {

  //
  private healthStatusValues: Array<Object> = [];

  // TypeScript public modifiers
  constructor(public appState: AppState, private healthService: HealthService) {

    // Subscribe with listener method to event
    EmitterService.get("data:health-status:received").subscribe(this.changeStatusValues.bind(this));
  }

  /**
   * Method changes model attribute with received data
   * @param valueList
   */
  private changeStatusValues(valueList: Array<Object>): void {

    this.healthStatusValues = valueList;
  }

  /**
   * Method called by angular on initialisation
   */
  ngOnInit() {

    // Use service to load status data
    this.healthService.getHealthStatus();
  }
}
