import { Component, Input , OnInit } from '@angular/core';
import { Record } from '../record';
import { Observable } from 'rxjs/Observable'
import { UpdateRecordService } from '../update-record.service'

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  private showDetails:boolean = false
  private edit:boolean = false
  @Input() record:any
  private updatedRecord:Record
  constructor(private updateRecord:UpdateRecordService) {
  }
  ngOnInit() {
    this.updatedRecord = this.record
  }
  toggle() {
    this.showDetails = !this.showDetails
    this.edit=false
  }
  Edit() {
    this.showDetails = false
    this.edit = true

  }
  onSubmit() {
    this.edit = false
    console.log(this.updatedRecord)
    this.updateRecord.update(this.updatedRecord).map(data => data).subscribe(record => {
      this.record = record
      this.showDetails = true
    })
  }

}
