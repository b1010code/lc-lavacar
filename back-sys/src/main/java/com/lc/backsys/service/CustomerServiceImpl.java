package com.lc.backsys.service;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.exception.ObjectNotFoundException;
import com.lc.backsys.repository.CustomerRepository;
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
public class CustomerServiceImpl  implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;


    @Override
    public Customer create(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findById(UUID id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public Customer update(UUID id, Customer customer) {
        Optional<Customer>customerExists = customerRepository.findById(id);

        if(customerExists != null){
            customerRepository.save(customer);
        }else {
            throw new ObjectNotFoundException("Cliente não encontrado !");
        }

        return customer;
    }
}
