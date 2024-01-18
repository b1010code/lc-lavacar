package com.lc.backsys.dto;

import com.lc.backsys.Entity.PriceWashSimple;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class PriceWashSimpleDTO {
    private UUID id;
    private PriceWashSimple.VehicleType vehicleType;
    private double price;


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
