package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Advertisement;
import com.example.demo.entities.Camp;
import com.example.demo.entities.Organization;

import com.example.demo.repositories.AdvertisementRepository;
import com.example.demo.repositories.OrganizationRepository;

@Service
public class AdvertisementService {
	
	@Autowired
	AdvertisementRepository adrepo;
	
	
	
	public Advertisement saveAd(Advertisement ad)
	{
		return adrepo.save(ad);
	}
	

	public boolean upload(int id, byte [] photo)
	{
		if(adrepo.uploadPhoto(id, photo)==1)
			return true;
		
		else
			return false;
	}

//	public List<Advertisement> getCamps()
//	{
//		return adrepo.getCamps();
//	}


}


