package com.example.becase.service.customer;

import com.example.becase.model.Customer;
import com.example.becase.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceCustomer implements IServiceCustomer{

    @Autowired
    private ICustomerRepository customerRepository;
    @Override
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }
}
