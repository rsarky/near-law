import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class UpdateRecordService {
  Url:string = 'http://localhost:3000/api/'
  constructor(private http:HttpClient) { }

  update(record:any) {
    this.Url = this.Url + encodeURIComponent(record.Citation.trim())
    return this.http.put(this.Url, record, httpOptions)
  } 
}
