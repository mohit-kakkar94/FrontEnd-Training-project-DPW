import { College } from "./college";
import { Department } from "./department";

export interface Student {

  id: number;
  name: string;
  email: string;
  dob: Date;
  address: string;
  college: College;
  department: Department;

}
