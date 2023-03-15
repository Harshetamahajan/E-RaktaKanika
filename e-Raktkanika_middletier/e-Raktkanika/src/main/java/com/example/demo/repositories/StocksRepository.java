package com.example.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.BloodBank;

import com.example.demo.entities.Stocks;
import java.util.*;

import javax.transaction.Transactional;

@Transactional
@Repository
public interface StocksRepository extends JpaRepository<Stocks, Integer> {


	@Query("select d from Stocks d where bb_id=:d")
	public List<Stocks> getStocks(BloodBank d);
	
	@Modifying
	@Query("update Stocks L set quantity=:quantity where stock_id=:stock_id")
	public int updateQuantity(int quantity, int stock_id);
	
	
}










