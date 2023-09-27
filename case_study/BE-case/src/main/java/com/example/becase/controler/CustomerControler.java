package com.example.becase.controler;

import com.example.becase.model.Customer;
import com.example.becase.service.customer.IServiceCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerControler {
    @Autowired
    private IServiceCustomer serviceCustomer;

    @GetMapping("")
    public ResponseEntity<List<Customer>> getAllCustomer(){
        if (serviceCustomer.getAllCustomer().isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(serviceCustomer.getAllCustomer(),HttpStatus.OK);
        }
    }
}
