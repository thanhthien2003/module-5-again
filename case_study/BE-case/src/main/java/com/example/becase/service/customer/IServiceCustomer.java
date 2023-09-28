package com.example.becase.service.customer;

import com.example.becase.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IServiceCustomer {
    Page<Customer> getAll(Pageable pageable);
    Page<Customer> getAllCustomerByName(String searchName, Pageable pageable);
    void createCustomer(Customer customer);
    void updateCustomer(Customer customer);
    void deleteCustomer(Integer id);
    Customer findById(Integer id);
}
