package com.example.becase.repository;

import com.example.becase.model.Customer;
import com.example.becase.model.TypeOfCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeOfCustomerRepository extends JpaRepository<TypeOfCustomer,Integer> {
}
