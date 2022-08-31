import { Component, Inject, OnInit } from '@angular/core';
import { Student } from '../entity/student';
import { StudentDetailsService } from '../StudentDetails.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  student: Student;
  studentDetailsService: StudentDetailsService;

  constructor(studentDetailsService: StudentDetailsService) {
    this.studentDetailsService = studentDetailsService;
  }

  ngOnInit(): void {
    this.student = this.studentDetailsService.student;
  }

}
