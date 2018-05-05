import { Component, Input , OnInit } from '@angular/core';
import { Record } from '../record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  private showDetails:boolean = false
  private edit:boolean = false
  @Input() record:Record
  private updatedRecord:Record
  constructor() {
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
  }

}
