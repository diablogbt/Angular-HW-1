import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  getUser() {
    return this.http.get(this.configUrl);
  }
}

