import {Customer} from "../customer/customer";
import {Facility} from "../facility/facility";
import {Employee} from "../employee/employee";

export interface Contract {
  id?: number;
  startDate?: string;
  endDate?: string;
  deposit?: number;
   customer?: Customer;
   facility?: Facility;
   employee?: Employee;
}
