import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FetchRecordsService } from './fetch-records.service'
import { UpdateRecordService } from './update-record.service'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component'


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FetchRecordsService,
    UpdateRecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
