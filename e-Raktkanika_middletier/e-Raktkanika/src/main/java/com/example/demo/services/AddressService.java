package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Address;
import com.example.demo.repositories.AddressRepository;



@Service
public class AddressService {
	
	@Autowired
	AddressRepository arepo;
	
	public Address getById(int address_id)
	{
		return arepo.findById(address_id).get();
	}
	
	public Address saveAddress(Address a)
	{
		return arepo.save(a);
	}

	public Address Save(Address a1) {
		// TODO Auto-generated method stub
		return null;
	}

}
