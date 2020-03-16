import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Document } from '../common/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl= 'http://localhost:8080/api/documents';

  constructor(private httpClient: HttpClient) { }

  getDocumentList(): Observable<Document[]> { 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    return  this.httpClient.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.documents));
  }
}

interface GetResponse{
  _embedded: {
    documents: Document[];
  }
 }