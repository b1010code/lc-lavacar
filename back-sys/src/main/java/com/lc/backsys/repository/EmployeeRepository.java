package com.lc.backsys.repository;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.Entity.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, UUID> {
}
