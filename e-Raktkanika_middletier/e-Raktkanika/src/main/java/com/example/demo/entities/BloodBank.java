package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="bloodbank")
public class BloodBank {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bb_id;
	
	@Column
	private String bb_name;
	@Column
	private String bb_regno;
	
	
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	
	@OneToOne
	@JoinColumn(name="address_id")
	Address address_id;

	
	public BloodBank( String bb_name, String bb_regno, Login login_id,Address address_id) {
		super();

		this.bb_name = bb_name;
		this.bb_regno = bb_regno;
		this.login_id = login_id;
		this.address_id = address_id;
	}
	
	public BloodBank( String bb_name, String bb_regno) {
		super();

		this.bb_name = bb_name;
		this.bb_regno = bb_regno;
		
		
	}

	public BloodBank() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Address getAddress_id() {
		return address_id;
	}

	public void setAddress_id(Address address_id) {
		this.address_id = address_id;
	}

	public int getBb_id() {
		return bb_id;
	}

	public void setBb_id(int bb_id) {
		this.bb_id = bb_id;
	}

	public String getBb_name() {
		return bb_name;
	}

	public void setBb_name(String bb_name) {
		this.bb_name = bb_name;
	}

	public String getBb_regno() {
		return bb_regno;
	}

	public void setBb_regno(String bb_regno) {
		this.bb_regno = bb_regno;
	}

	

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}

	

	 
	
	
	

}







