import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number;
  nameCustomer?: string;
  birthday?: string;
  gender?: boolean;
  id_card?: string;
  phone?: string;
  email?: string;
  address?: string;
  customerType?:CustomerType;
}
