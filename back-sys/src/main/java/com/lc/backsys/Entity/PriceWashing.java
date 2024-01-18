package com.lc.backsys.Entity;

import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@EntityScan
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "priceWashing")
public class PriceWashing {
    @Id
    private UUID id = UUID.randomUUID();

    @NonNull
    private WashingType washingType;

    @NonNull
    private VehicleType vehicleType;

    @NonNull
    private double price;

    public enum WashingType {
        WashingSimple,
        WashingPremium
    }

    public enum VehicleType {
        CAR,
        SUV,
        TRUCK,
        MOTORCYCLE
    }
}
