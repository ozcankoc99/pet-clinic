import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from 'src/app/shared/services/base-data-service.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class OwnerService extends BaseDataService {
  getOneCrudTest(ID: number): Observable<any> {
    return this.http.get<any>(`fullNetApi/any/GetOneCrudTest/${ID}`).pipe(
      tap((x) => {
        console.log('getOneCrudTest-tap', x);
      })
    );
  }
  /*
  getAllCrudTests(): Observable<CrudTest[]> {
    const response = this.http
      .get<CrudTest[]>('fullNetApi/CrudTest/GetAllCrudTests/')
      .pipe(
        tap((x) => {
          console.log('getAllCrudTest-tap', x);
        })
      );
    return response;
  }

  saveOneCrudTest(value: CrudTest): Observable<CrudTest> {
    return this.http
      .post<CrudTest>(`fullNetApi/CrudTest/SaveOneCrudTest/`, value)
      .pipe(
        tap((x) => {
          console.log('saveOneCrudTest-tap', x);
        })
      );
  }
  */
}
