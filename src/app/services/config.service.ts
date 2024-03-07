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
  configuration: ConfigItem[] = [
    {
      id: 1,
      name: "cta",
      data: [
        {
          title: "Call To Action",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          url: "Call To Action",
          buttontext: "Call To Action"
        }
      ]
    }
  ];
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