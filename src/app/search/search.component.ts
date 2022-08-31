import { Component, OnInit } from '@angular/core';
import { Student } from '../entity/student';
import { ListComponent } from '../list/list.component';
import { SearchRecordsService } from '../SearchRecords.service';
import { StudentRecordsService } from '../StudentRecords.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  studentRecordsService: StudentRecordsService;
  searchRecordService: SearchRecordsService;
  studentName = "";
  studentEmail = "";
  departments: string[] = [];
  iValDep = "";
  colleges: string[] = [];
  iValCol = "";

  constructor(studentRecordsService: StudentRecordsService, searchRecordService: SearchRecordsService) {
    this.studentRecordsService = studentRecordsService;
    this.searchRecordService = searchRecordService;
  }

  ngOnInit(): void {
    this.getDepartments();
    this.getColleges();
  }

  getDepartments() {
    this.studentRecordsService.getListOfDepartments()
        .subscribe(
          (response: string[]) => {
            this.departments = response;
          }
        );
  }

  getColleges() {
    this.studentRecordsService.getListOfColleges()
        .subscribe(
          (response: string[]) => {
            this.colleges = response;
          }
        );
  }

  onSubmit(submittedForm) {

    this.searchRecordService.searchRecords(submittedForm.value.name,
      submittedForm.value.email,
      submittedForm.value.department,
      submittedForm.value.college
    );

    submittedForm.reset(
      {
        name: this.studentName = '',
        email: this.studentEmail = '',
        department: this.iValDep = '',
        college: this.iValCol = ''
      }
    );

  }

}
