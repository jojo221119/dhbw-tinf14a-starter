import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EmitterService } from '../emitter.service';

@Injectable()
export class HealthService {

  /**
   * Constructor method
   */
  public constructor(private http: Http) {
  }

  /**
   * This method gets health state from API endpoint
   */
  public getHealthStatus() {

    // Use angular http client to retrieve
    this.http.get("//api.local/health")
             .map(res => res.json())
             .subscribe((res) => {

               // Trigger event with received data as payload
               EmitterService.get("data:health-status:received").emit(res);
             });
  }
}
