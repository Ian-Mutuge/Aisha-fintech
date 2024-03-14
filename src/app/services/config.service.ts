import { Injectable } from '@angular/core';
import { ConfigItem } from './config-item';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of,filter } from 'rxjs';


const httpOptions={
  'headers': new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl="http://localhost:3000/configuration";

  constructor(private http: HttpClient) { }


  getAllPages(): Observable<ConfigItem[]> {
    //return this.configuration;
    return this.http.get<ConfigItem[]>(this.apiUrl) ?? {};
  }

  getPageById(id: number): Observable<ConfigItem> {
    //return this.configuration;
    return this.http.get<ConfigItem>(`${this.apiUrl}/${id}`) ?? {};
  }

  getPageByName(pageName: string): Observable<ConfigItem> {
  // return this.configuration.find((configItem) =>configItem.name === pageName);
  return this.http.get<ConfigItem>(this.apiUrl).pipe(
  filter((configItem) =>configItem.name === pageName)
  )
}
}