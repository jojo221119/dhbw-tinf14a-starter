import { inject, TestBed } from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

// Load the implementations that should be tested
import { EmitterService } from '../emitter.service';
import { HealthService } from './health.service';

describe('Health Service', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      EmitterService,
      HealthService
    ]
  }));

  it('should emit an event on getHealthStatus call', inject([HealthService, EmitterService, MockBackend], (healthService: HealthService, emitterService: EmitterService, mockBackend: MockBackend) => {

    // Define http backend response mock
    mockBackend.connections.subscribe((connection: MockConnection) => {
      // Create a dummy fake response
      connection.mockRespond(new Response(
        new ResponseOptions({
          body: [
            {"Variable_name": "Variable 1",
             "Value": "Value 1"}
          ]
        })
      ));
    });

    // Define a data event listener checking data retrieval
    EmitterService.get("data:health-status:received").subscribe((valueList: Array<Object>) => {

      // Check if event emitter passes http data
      expect(valueList[0]).toBeDefined();

      // Check if content is valid
      expect(valueList[0]["Variable_name"]).toBe("Variable 1");
      expect(valueList[0]["Value"]).toBe("Value 1");
    });

    // Use get health status to retrieve a health status
    healthService.getHealthStatus();
  }));

});
