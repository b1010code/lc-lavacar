package com.lc.backsys.repository;

import com.lc.backsys.Entity.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, UUID> {
}
