export interface PriceWashing {
    id: string;
    washingType: string | null;
    formattedWashingType: string | null;
    vehicleType: string | null;
    formattedVehicleType: string | null;
    price: number | null;
    formattedPrice: number | null;
}