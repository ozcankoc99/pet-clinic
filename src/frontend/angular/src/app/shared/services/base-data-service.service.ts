import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export abstract class BaseDataService {
  protected baseUrl = environment.apiUrl;
  protected handleError: <T>(
    operation?: string,
    result?: T
  ) => (error: HttpErrorResponse) => Observable<T>;
  constructor(
    protected http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError(this.serviceName());
  }
  protected serviceName(): string {
    return this.constructor.name;
  }
}
