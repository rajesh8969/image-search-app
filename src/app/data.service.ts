import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint = 'https://api.unsplash.com';
  private apiClientId = 'EkOYJW2H1BnWV1jHle8EdhSBz4hW9aGQS9sU-2UWzr8';

  constructor(private http: HttpClient) { 
    this.getApiKey();
  }

  getApiKey() {
    this.http.get('../../res/api_key.json')
      .subscribe((response: any) => {alert(1);this.apiClientId = response.key});
  }

  getPhotos(keyword: string) {
    return this.http.get(`${this.endpoint}/search/photos?client_id=${this.apiClientId}&query=${keyword}`);
  }
}
