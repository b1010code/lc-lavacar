package com.lc.backsys.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@EntityScan
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "washing")
public class Washing {
    @Id
    private UUID id = UUID.randomUUID();

    @NonNull
    private LocalDateTime dateTime;

    @NonNull
    private String employee;

    @NonNull
    private String washingType;

    @NonNull
    private String vehicleType;

    @NonNull
    private Double customer;

    @NonNull
    private String typeCar;

    @NonNull
    private String color;

    @NonNull
    private String licensePlate;

    @TextIndexed
    private String observations;
}
