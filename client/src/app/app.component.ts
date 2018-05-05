import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { FetchRecordsService } from './fetch-records.service';
import { Record } from './record'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private citation:string = '2008 ALL SCR 241'
  private record:any
  private noRecord:boolean=false
  constructor(private fetchRecords:FetchRecordsService) {

  }
  onSubmit() {
    this.fetchRecords.getRecord(this.citation).map((res:Response) => res).
      subscribe((record) => {
        this.record=record
        if(!this.record) this.noRecord = true
        console.log(this.record)
      })

  }

}
