import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import {environment as env} from '../../environments/environment'
 import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
}
