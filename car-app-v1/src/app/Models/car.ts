export interface Car {
    carId: number;
    brand: string;
    model: string;
    color: string;
    chassisNumber: string;
    keysNumber: number;
    dateArrived: Date;
    soldOrStock: string;
    customerName?: string; // The property is optional as it's nullable in the Java class

}
