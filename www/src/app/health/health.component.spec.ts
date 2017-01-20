import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { HealthComponent } from './health.component';
import { HealthService } from "./health.service";
import { EmitterService } from '../emitter.service';

describe('Health', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // Provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      AppState,
      {
        provide: HealthService,
        useValue: {
          getHealthStatus: function() {}
        }
      },
      HealthComponent,
      EmitterService
    ]
  }));

  it('should initialize a Health component without error', inject([HealthComponent], (health: HealthComponent) => {

    expect(health).toBeDefined();
  }));

  it('should get health status from service on ngInit', inject([HealthComponent, HealthService], (health: HealthComponent, healthService: HealthService) => {

    //
    let funcSpy = spyOn(healthService, "getHealthStatus");

    // Call ng on init method
    health.ngOnInit();

    // Check if health service function has been called
    expect(funcSpy).toHaveBeenCalled();
  }));


  it('should listen to data:health-status:received event and call changeStatusValues method', inject([HealthComponent, EmitterService], (health: HealthComponent, emitterService: EmitterService) => {

    // Spy on event listener method
    let funcSpy = spyOn(health, "changeStatusValues");

    // trigger event with empty payload
    EmitterService.get("data:health-status:received").emit({});

    // Check if method has been called
    expect(funcSpy).toHaveBeenCalled();

  }));

});
