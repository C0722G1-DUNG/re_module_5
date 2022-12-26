import {FacilityType} from "./facility-type";
import {RentType} from "./rent-type";

export interface Facility {
  id: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherCovenience?: string;
  pollArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
  facilityType?: FacilityType;
  rentType?: RentType;

}
