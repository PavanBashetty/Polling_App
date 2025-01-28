import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from '../model/interface/poll';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  createPoll(poll:Partial<Poll>):Observable<Poll>{
    return this.http.post<Poll>(`${environment.BASE_URL}`,poll);
  }

  getPolls():Observable<Poll[]>{
    return this.http.get<Poll[]>(`${environment.BASE_URL}`);
  }

  vote(pollId:number, optionIndex:number):Observable<void>{
    return this.http.post<void>(`${environment.BASE_URL}/vote`,{pollId,optionIndex});
  }

}
