package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Camp;
import com.example.demo.entities.Organization;

@Repository
public interface CampRepository extends JpaRepository<Camp, Integer> {
	
	@Query("select a from Camp a where org_id =:org_id")
	public List<Camp> getCamps (Organization org_id);
	

}


