import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of, empty, throwError } from 'rxjs';
import { ToastService } from './toast.service';
import { LogService } from './log.service';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError = <T>(
  operation?: string,
  result?: T
) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandlerService {
  constructor(
    private toastService: ToastService,
    private logService: LogService
  ) {}

  createThrowError =
    (serviceName = '') =>
    <T>(
      operation = 'operation',
      result = (<any>{ createThrowError: true }) as T
    ) =>
      this.handleError(serviceName, operation, result);

  /** Create curried handleError function that already knows the service name */
  createHandleError =
    (serviceName = '') =>
    <T>(operation = 'operation', result = {} as T) =>
      this.handleError(serviceName, operation, result);

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      this.logService.add(`${serviceName}: ${operation} hatası`, error);
      //console.error(error); // log to console instead

      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      const displayMessage = `${serviceName}: ${operation} failed: ${message}`;
      // TODO: better job of transforming error for user consumption
      this.toastService.error(displayMessage);
      console.log(`${serviceName}: ${operation} failed: ${message}`, error);
      // Let the app keep running by returning a safe result.
      if (result) {
        // if ((<any>result).createThrowError) {
        //   return throwError(displayMessage);
        // }
        return of(result);
      }
      return empty();
    };
  }
}
