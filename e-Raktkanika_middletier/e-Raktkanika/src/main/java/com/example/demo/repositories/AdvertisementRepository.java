package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Advertisement;


@Transactional
@Repository
public interface AdvertisementRepository extends JpaRepository<Advertisement, Integer> {

//	@Query("select a.cid.cname from Advertisement a where ad_status =0")
//	public List<Advertisement> getCamps();
	
	
	@Modifying
	@Query("update Advertisement set ad_img = :file,ad_status=1 where ad_id = :id")
	public int uploadPhoto(int id , byte [] file);

	
}
 

