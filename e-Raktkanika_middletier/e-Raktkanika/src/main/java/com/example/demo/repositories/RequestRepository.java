package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Login;
import com.example.demo.entities.Request;
@Transactional
@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {

	@Query("select r from Request r where req_status=0")
	public List<Request> getAll();
	
	@Modifying
	@Query("update Request r set req_status=1 where req_id=:req_id")
	public int approveReq(int req_id);
	
	
	@Query("select r from Request r where r.login_id=:login_id and r.req_status=1")
	public List<Request> getAprovedRequest(Login login_id);
	
//	@Query("select r from Request r where r.bb_id=:bb_id and r.req_status=0")
//	public List<Request> getPendingRequest(Login bb_id);



}


