import { Component } from '@angular/core';
import { Student } from './entity/student';
import { SearchRecordsService } from './SearchRecords.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uni Pages';
}
