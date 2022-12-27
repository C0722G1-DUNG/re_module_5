import {Division} from "./division";
import {Position} from "./position";

export interface Employee {
  id?: number;
  nameEmployee?: string;
  birth?: string;
  idCard?: string;
  salary?: string;
  phone?: string;
  email?: string;
  address?: string;
  position?: Position;
  division?: Division;

}
