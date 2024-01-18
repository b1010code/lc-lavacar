package com.lc.backsys.dto;

import com.lc.backsys.Entity.PriceWashing;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class PriceWashingDTO {
    private UUID id;
    private PriceWashing.WashingType washingType;
    private PriceWashing.VehicleType vehicleType;
    private double price;

    public String getFormattedWashingType(){
        switch (washingType) {
            case WashingSimple:
                return "LAVAÇÃO SIMPLES";
            case WashingPremium:
                return "LAVAÇÃO PREMIUM";
            default:
                return "";
        }
    }

    public String getFormattedVehicleType() {
        switch (vehicleType) {
            case CAR:
                return "CARRO";
            case SUV:
                return "SUV";
            case TRUCK:
                return "CAMIONETE";
            case MOTORCYCLE:
                return "MOTO";
            default:
                return "";
        }
    }

    public String getFormattedPrice() {
        return String.format("%.2f", price).replace(".", ",");
    }
}
