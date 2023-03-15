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
@Table(name = "admin")
public class Admin {


	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int admin_id;
	
	@Column
	private String admin_name= "admin";
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;


	public Admin() {
		super();
		
	}


	public Admin(int admin_id, String admin_name, Login login_id) {
		super();
		this.admin_id = admin_id;
		this.admin_name = admin_name;
		this.login_id = login_id;
	}
	
	

	

	public Admin(String admin_name, Login login_id) {
		super();
		this.admin_name = admin_name;
		this.login_id = login_id;
	}


	public Admin( Login login_id) {
		super();
	
		this.login_id = login_id;
	}

	



	public int getAdmin_id() {
		return admin_id;
	}


	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}


	public String getAdmin_name() {
		return admin_name;
	}


	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}


	public Login getLogin_id() {
		return login_id;
	}


	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
	
}






