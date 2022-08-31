import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StudentRecordsService } from './StudentRecords.service';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SearchRecordsService } from './SearchRecords.service';
import { DetailsComponent } from './details/details.component';
import { StudentDetailsService } from './StudentDetails.service';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'list', component: ListComponent},
  {path: 'details', component: DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StudentRecordsService, SearchRecordsService, StudentDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
