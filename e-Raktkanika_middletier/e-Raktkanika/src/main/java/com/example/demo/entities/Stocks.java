package com.example.demo.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="stocks")
public class Stocks {


	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int stock_id;
	
	@Column
	private String blood_grp;
	@Column
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name="bb_id")
	BloodBank bb_id;


	public Stocks(int stock_id, String blood_grp, int quantity, BloodBank bb_id) {
		super();
		this.stock_id = stock_id;
		this.blood_grp = blood_grp;
		this.quantity = quantity;
		this.bb_id = bb_id;
	}
	
	
	public Stocks( String blood_grp, int quantity, BloodBank bb_id) {
		super();
		this.blood_grp = blood_grp;
		this.quantity = quantity;
		this.bb_id = bb_id;
	}


	public Stocks() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getStock_id() {
		return stock_id;
	}


	public void setStock_id(int stock_id) {
		this.stock_id = stock_id;
	}


	public String getBlood_grp() {
		return blood_grp;
	}


	public void setBlood_grp(String blood_grp) {
		this.blood_grp = blood_grp;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public BloodBank getBb_id() {
		return bb_id;
	}


	public void setBb_id(BloodBank bb_id) {
		this.bb_id = bb_id;
	}
	
	
}





