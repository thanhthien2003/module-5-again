package com.example.becase.service.customer;

import com.example.becase.model.Customer;
import com.example.becase.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceCustomer implements IServiceCustomer{

    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public Page<Customer> getAll(Pageable pageable) {
        return customerRepository.findAll(pageable);
    }

    @Override
    public Page<Customer> getAllCustomerByName(String searchName, Pageable pageable) {
        return customerRepository.getAllCustomerByName(searchName,pageable);
    }

    @Override
    public void createCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void updateCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public Customer findById(Integer id) {
        return customerRepository.findById(id).get();
    }
}
