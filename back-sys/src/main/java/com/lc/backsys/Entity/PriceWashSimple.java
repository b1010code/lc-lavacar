package com.lc.backsys.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@EntityScan
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "priceWashSimple")
public class PriceWashSimple {
    @Id
    private UUID id = UUID.randomUUID();

    @NonNull
    private VehicleType vehicleType;

    @NonNull
    private double price;

    public enum VehicleType {
        CAR,
        SUV,
        TRUCK,
        MOTORCYCLE
    }
}
