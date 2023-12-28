package com.lc.backsys.controller;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.service.CustomerService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/customer")
public class CustomerController {

    private CustomerService customerService;

    @PostMapping("/save")
    public ResponseEntity<Customer> create(@RequestBody Customer customer){
        Customer createCustomer = customerService.create(customer);
        return ResponseEntity.ok(createCustomer);
    }

    @GetMapping("/get")
    public ResponseEntity <List<Customer>>findAll(){
        List<Customer>customers = customerService.findAll();
        return ResponseEntity.ok(customers);
    }


    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Customer>findById(@PathVariable(value = "id") UUID id){
        Customer customer = customerService.findById(id);

        if (customer != null){
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> update(@PathVariable(value = "id")  UUID id, @RequestBody Customer customer) {
        Customer updatedCustomer = customerService.update(id, customer);

        if (updatedCustomer != null) {
            return ResponseEntity.ok(updatedCustomer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
