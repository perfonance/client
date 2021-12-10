import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const POST_API = 'http://localhost:8080/api/post/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclient: HttpClient) {
  }

  createPost(post: any): Observable<any> {
    return this.httpclient.post(POST_API + 'create', post);
  }

  getAllPosts(): Observable<any> {
    return this.httpclient.get(POST_API + 'all');
  }

  getPostsForCurrentUser(): Observable<any> {
    return this.httpclient.get(POST_API + 'user/posts');
  }

  delete(id: number): Observable<any> {
    return this.httpclient.post(POST_API + id + '/delete', null);
  }

  likePost(id: number, username: string): Observable<any> {
    return this.httpclient.post(POST_API + id + '/' + username + '/like', null);
  }
}
