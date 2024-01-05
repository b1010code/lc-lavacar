package com.lc.backsys.service;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.Entity.Employee;

import java.util.List;
import java.util.UUID;

public interface EmployeeService {
    public Employee create(Employee employee);
    public List<Employee> findAll();
    public Employee findById(UUID id);
    public Employee update(UUID id, Employee employee);
}
