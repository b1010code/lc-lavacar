package com.lc.backsys.service;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.Entity.Employee;
import com.lc.backsys.exception.ObjectNotFoundException;
import com.lc.backsys.repository.CustomerRepository;
import com.lc.backsys.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Data
@AllArgsConstructor
@Service
public class EmployeeServiceImp implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public Employee create(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findById(UUID id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public Employee update(UUID id, Employee employee) {
        Optional<Employee> employeeExists = employeeRepository.findById(id);

        if(employeeExists != null){
            employeeRepository.save(employee);
        }else {
            throw new ObjectNotFoundException("Cliente não encontrado !");
        }

        return employee;
    }
}
