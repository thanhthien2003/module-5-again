package com.example.becase.controler;

import com.example.becase.model.Customer;
import com.example.becase.service.customer.IServiceCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerControler {
    @Autowired
    private IServiceCustomer serviceCustomer;

    @GetMapping("")
    public ResponseEntity<Page<Customer>> getAllCustomerByName(
            @RequestParam("_page") int page,
            @RequestParam("_limit") int size,
            @RequestParam("name_like") String searchName
    ){
        Pageable pageable = PageRequest.of(page, size);
        Page<Customer> listCustomer;
        if (searchName != null && !searchName.isEmpty()){
            listCustomer = serviceCustomer.getAllCustomerByName(searchName,pageable);
        } else {
            listCustomer = serviceCustomer.getAll(pageable);
        }
        return new ResponseEntity<>(listCustomer,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Customer> createCustomer (@RequestBody Customer customer){
         serviceCustomer.createCustomer(customer);
        return ResponseEntity.created(URI.create("/customer/" + customer.getId())).body(customer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Integer id,@RequestBody Customer customer){
                if (serviceCustomer.findById(id)==null){
                    return ResponseEntity.notFound().build();
                } else {
                    serviceCustomer.updateCustomer(customer);
                    return ResponseEntity.ok(customer);
                }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Integer id){
        Customer customer = serviceCustomer.findById(id);
        if (customer==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(customer,HttpStatus.OK);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Integer id){
        if (serviceCustomer.findById(id)==null){
           return ResponseEntity.notFound().build();
        }
        serviceCustomer.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}
