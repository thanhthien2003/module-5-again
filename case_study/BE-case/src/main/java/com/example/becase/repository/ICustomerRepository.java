package com.example.becase.repository;

import com.example.becase.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    @Query("SELECT c FROM Customer c WHERE c.name like concat('%',:searchName,'%')")
    Page<Customer> getAllCustomerByName(@Param("searchName") String searchName, Pageable pageable);

}
