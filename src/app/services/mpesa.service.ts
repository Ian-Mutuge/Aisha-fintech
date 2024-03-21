import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MpesaService {
  private stkInitiateUrl = 'http://localhost/my-app/src/app/mutuge/mpesa/stk_initiate.php';
  constructor(private http: HttpClient) { }

  initiateSTK(amount: string, phone: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    const data = {
      amount: amount,
      phone: phone
    };

    return this.http.post<any>(this.stkInitiateUrl, data, { headers: headers });
  }
}
