package com.example.demo.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Transactional
@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

	
	@Query("select a from Login a where email = :email and password = :password")
	public Optional<Login> getLogin(String email, String password);
	
	
	@Modifying
	@Query("update Login L set del_profile=1 where login_id=:login_id")
	public int deleteProfile( int login_id);


	
	
	
	
	
	
}
