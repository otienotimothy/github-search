import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  fetchUser(searchTerm: string): Promise<any>{
    let url:string = `https://api.github.com/users/${searchTerm}`
    let response: any = this.http.get(url);
    response = lastValueFrom(response);
    return response;
  }

}
