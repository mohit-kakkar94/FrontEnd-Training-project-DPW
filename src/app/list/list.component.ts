import {  Component, OnInit } from '@angular/core';
import { Student } from '../entity/student';
import { SearchRecordsService } from '../SearchRecords.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Student[] = [];
  searchRecordsService: SearchRecordsService;

  constructor(searchRecordsService: SearchRecordsService) {
    this.searchRecordsService = searchRecordsService;
  }

  ngOnInit(): void {
    this.searchRecordsService.searchPerformed.subscribe(
      ()  => {
        this.students = this.searchRecordsService.students;
      }
    );
  }

}
