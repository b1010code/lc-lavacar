package com.lc.backsys.controller;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.Entity.Employee;
import com.lc.backsys.service.EmployeeService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/save")
    public ResponseEntity<Employee> create(@RequestBody Employee employee){
        Employee createEmployee = employeeService.create(employee);
        return ResponseEntity.ok(createEmployee);
    }

    @GetMapping("/get")
    public ResponseEntity <List<Employee>>findAll(){
        List<Employee>employees = employeeService.findAll();
        return ResponseEntity.ok(employees);
    }


    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Employee>findById(@PathVariable(value = "id") UUID id){
        Employee employee = employeeService.findById(id);

        if (employee != null){
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> update(@PathVariable(value = "id")  UUID id, @RequestBody Employee employee) {
        Employee updatedEmployee = employeeService.update(id, employee);

        if (updatedEmployee != null) {
            return ResponseEntity.ok(updatedEmployee);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
