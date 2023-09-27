package com.example.becase.model;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
//    "name": "Thanh Thien1",
//            "gender": "true",
//            "citizenId": 123456789,
//            "phone": "0905010738",
//            "email": "thien@gmail.com",
//            "typeOfCustomer": {
//        "id": 1,
//                "name": "Diamond"
//    },
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Boolean gender;
    private String citizenId;
    private String phone;
    private String email;
    private String address;
    @ManyToOne
    @JoinColumn()
    private TypeOfCustomer typeOfCustomer;

    public Customer() {
    }

    public Customer(Integer id, String name, Boolean gender, String citizenId, String phone, String email, String address, TypeOfCustomer typeOfCustomer) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.citizenId = citizenId;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.typeOfCustomer = typeOfCustomer;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }

    public String getCitizenId() {
        return citizenId;
    }

    public void setCitizenId(String citizenId) {
        this.citizenId = citizenId;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public TypeOfCustomer getTypeOfCustomer() {
        return typeOfCustomer;
    }

    public void setTypeOfCustomer(TypeOfCustomer typeOfCustomer) {
        this.typeOfCustomer = typeOfCustomer;
    }
}
