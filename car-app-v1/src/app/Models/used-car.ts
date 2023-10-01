import {Car} from "./car";

export interface UsedCar extends Car {
    mileage: number;
    regNumber: string;
}
