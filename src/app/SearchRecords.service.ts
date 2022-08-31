import { Injectable } from "@angular/core";
import { Student } from "./entity/student";
import { StudentRecordsService } from "./StudentRecords.service";
import { Subject } from "rxjs";

@Injectable()
export class SearchRecordsService {

    students: Student[] = [];
    studentRecordsService: StudentRecordsService;
    searchPerformed = new Subject<void>();

    constructor(studentRecordsService: StudentRecordsService) {
      this.studentRecordsService = studentRecordsService;
    }

    searchRecords(searchName, searchEmail, searchDepartment, searchCollege) {

      this.students = [];

      searchName = searchName.split(' ').join('%20');
      searchDepartment = searchDepartment.split(' ').join('%20');
      searchCollege = searchCollege.split(' ').join('%20');


      if (searchEmail !== '') {
        this.studentRecordsService.getStudentByEmail(searchEmail)
            .subscribe(
              (response: Student) => {
                this.students.push(<Student>response);
              }
            );
      }

      else if (searchName !== '' && searchDepartment !== '' && searchCollege !== '') {
        this.studentRecordsService
            .getStudentsByNameAndDepartmentNameAndCollegeName(searchName, searchDepartment, searchCollege)
            .subscribe(
              (response: Student[]) => {
                // this.students = <Student[]>response; (Works on double click of search)
                for (var res of response) {
                  this.students.push(res);
                }
              }
            );
      }

      else if (searchDepartment !== '' && searchCollege !== '') {
        this.studentRecordsService
            .getStudentsByDepartmentNameAndCollegeName(searchDepartment, searchCollege)
            .subscribe(
              (response: Student[]) => {
                // this.students = <Student[]>response; (Works on double click of search)
                for (var res of response) {
                  this.students.push(res);
                }
              }
            );
      }


      else if (searchName !== '') {
        this.studentRecordsService.getStudentsByName(searchName)
            .subscribe(
              (response: Student[]) => {
                // this.students = <Student[]>response; (Works on double click of search)
                for (var res of response) {
                  this.students.push(res);
                }
              }
            );
      }

      else if (searchDepartment !== '') {
        this.studentRecordsService.getStudentsByDepartmentName(searchDepartment)
            .subscribe(
              (response: Student[]) => {
                // this.students = <Student[]>response; (Works on double click of search)
                for (var res of response) {
                  this.students.push(res);
                }
              }
            );
      }

      else {

        // searchCollege !== ''

        this.studentRecordsService.getStudentsByCollegeName(searchCollege)
            .subscribe(
              (response: Student[]) => {
                // this.students = <Student[]>response; (Works on double click of search)
                for (var res of response) {
                  this.students.push(res);
                }
              }
            );
      }
      this.searchPerformed.next();

    }

}
