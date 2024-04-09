import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Comment } from '../commets';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiurl = environment.baseApiUrl
  private apiUrl = `${this.baseApiurl}api/moments/comments`

  constructor(private http: HttpClient) { }

  createComment(data: Comment): Observable<Response<Comment>> {
    return this.http.post<Response<Comment>>(this.apiUrl, data);
  }
}
