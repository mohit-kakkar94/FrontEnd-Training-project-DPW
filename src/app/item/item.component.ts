import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Student } from '../entity/student';
import { SearchRecordsService } from '../SearchRecords.service';
import { StudentDetailsService } from '../StudentDetails.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() student: Student;


  @ViewChild('draggable') private draggableElement: ElementRef;
  searchRecordsService: SearchRecordsService;
  studentDetailsService: StudentDetailsService;

  constructor(searchRecordsService: SearchRecordsService,
              studentDetailsService: StudentDetailsService) {
    this.searchRecordsService = searchRecordsService;
    this.studentDetailsService = studentDetailsService;
  }

  ngOnInit(): void {
    this.searchRecordsService.searchPerformed.subscribe(
      () => {
        this.draggableElement.nativeElement.remove();
      }
    );
  }

  onClick() {
    this.studentDetailsService.student = this.student;
  }

}
