package com.example.becase.controler;

import com.example.becase.model.TypeOfCustomer;
import com.example.becase.service.typeCustomer.IServiceTypeCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("typeOfCustomer")
@CrossOrigin("*")
public class TypeOfCustomerControler {
    @Autowired
    private IServiceTypeCustomer serviceTypeCustomer;

    @GetMapping("")
    public ResponseEntity<List<TypeOfCustomer>> getAllCustomerType(){
        if (serviceTypeCustomer.getAllType().isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(serviceTypeCustomer.getAllType(),HttpStatus.OK);
        }
    }
}
