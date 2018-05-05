import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable()
export class FetchRecordsService {
  Url:string = 'http://localhost:3000/api/'
  constructor(private http:HttpClient) { }
  getRecord(citation:string) {
    citation = encodeURIComponent(citation.trim())
    return this.http.get(this.Url+citation)
  }

}
