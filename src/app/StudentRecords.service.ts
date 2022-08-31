import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from './entity/student';

@Injectable()
export class StudentRecordsService {

  httpClient: HttpClient;
  private apiServerUrl = environment.apiBaseUrl;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getListOfDepartments(): Observable<string[]> {
    return this.httpClient
               .get<string[]>(this.apiServerUrl + '/department/getListOfDepartments')
  }

  public getListOfColleges(): Observable<string[]> {
    return this.httpClient
               .get<string[]>(this.apiServerUrl + '/college/getListOfColleges');
  }

  public getStudentsByName(name): Observable<Student[]> {
    return this.httpClient
               .get<Student[]>(this.apiServerUrl + '/student' + '/getStudentsByName/' + name);
  }

  public getStudentByEmail(email): Observable<Student> {
    return this.httpClient
               .get<Student>(this.apiServerUrl + '/student' + '/getStudentByEmail/' + email);
  }

  public getStudentsByDepartmentName(departmentName): Observable<Student[]> {
    return this.httpClient
               .get<Student[]>(this.apiServerUrl + '/student' + '/getStudentsByDepartment/' + departmentName);
  }

  public getStudentsByCollegeName(collegeName): Observable<Student[]> {
    return this.httpClient
               .get<Student[]>(this.apiServerUrl + '/student' + '/getStudentsByCollege/' + collegeName);
  }

  public getStudentsByDepartmentNameAndCollegeName(departmentName,
                                                   collegeName): Observable<Student[]> {
    return this.httpClient
               .get<Student[]>(this.apiServerUrl + '/student' +
               '/getStudentsByDepartmentNameAndCollegeName/' +
               departmentName + '/' +
               collegeName) ;
  }

  public getStudentsByNameAndDepartmentNameAndCollegeName(name,
                                                          departmentName,
                                                          collegeName): Observable<Student[]> {
    return this.httpClient
               .get<Student[]>(this.apiServerUrl + '/student' +
                               '/getStudentsByNameAndDepartmentNameAndCollegeName/' +
                               name + '/' +
                               departmentName + '/' +
                               collegeName);
  }




}
