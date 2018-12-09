export interface Employee {
    id: number;
    Name: string;
    Email?: string;
    Phone?: string;
    Addresses: Address[];
}

export interface Address {
    Type?: string;
    Street?: string;
    City?: string;
    PinCode?: string;
}