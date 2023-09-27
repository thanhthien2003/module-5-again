package com.example.becase.service.typeCustomer;

import com.example.becase.model.TypeOfCustomer;
import com.example.becase.repository.ITypeOfCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceTypeCustomer implements IServiceTypeCustomer{
    @Autowired
    private ITypeOfCustomerRepository typeOfCustomerRepository;
    @Override
    public List<TypeOfCustomer> getAllType() {
        return typeOfCustomerRepository.findAll();
    }
}
