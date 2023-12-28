package com.lc.backsys.Entity;

import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@EntityScan
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "customer")
public class Customer {

    @Id
    private UUID id = UUID.randomUUID();

    @NonNull
    private String name;

    @NonNull
    private String typeCar;

    @NonNull
    private String color;

    @NonNull
    private String licensePlate;
}
