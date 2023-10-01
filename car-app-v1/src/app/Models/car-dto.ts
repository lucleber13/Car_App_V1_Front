export interface CarDTO {
    carId: number;
    brand: string;
    model: string;
    color: string;
    chassisNumber: string;
    keysNumber: number;
    dateArrived: Date;
    soldOrStock: string; // Assuming `SoldOrStock` is a string enum in the backend
    customerName: string;
    regNumber: string;
    mileage: number;
}
