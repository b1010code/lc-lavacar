package com.lc.backsys.service;

import com.lc.backsys.Entity.Customer;

import java.util.List;
import java.util.UUID;

public interface CustomerService {
    public Customer create(Customer customer);
    public List<Customer>findAll();
    public Customer findById(UUID id);
}
