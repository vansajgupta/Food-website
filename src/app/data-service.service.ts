import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'    

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

 // private url='http://jsonplaceholder.typicode.com/posts';

 private url='http://localhost:8080/courses';

  constructor(private httpClient:HttpClient) { }

  getPost(){
   return this.httpClient.get(this.url );
  }
}
