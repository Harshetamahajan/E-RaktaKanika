package com.example.demo.repositories;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.Login;
import com.example.demo.entities.Stocks;

@Transactional
@Repository
public interface HospitalRepository extends JpaRepository< Hospital,Integer> 
{
	@Query("select h from Hospital h where login_id=:l")
	public Hospital getHospital(Login l);
	
	
	@Query("select s from Stocks s where s.blood_grp=:blood_grp and s.bb_id.address_id.area=:area")
	public List<Stocks> getStock(String blood_grp,String area);
	

	@Modifying
	@Query("update Login set email=:email,contactno=:contactno where login_id=:login_id")
	public int updateProfile(String email, String contactno,int login_id);

}






