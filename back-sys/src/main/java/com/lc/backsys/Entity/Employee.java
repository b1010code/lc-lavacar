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
@Document(collection = "employee")
public class Employee {
    @Id
    private UUID id = UUID.randomUUID();

    @NonNull
    private String name;

    @NonNull
    private String office;
}
