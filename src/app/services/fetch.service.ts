import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  fetchData(url: string): Promise<any>{
    let response: any = this.http.get(url);
    response = lastValueFrom(response);
    return response;
  }
}
