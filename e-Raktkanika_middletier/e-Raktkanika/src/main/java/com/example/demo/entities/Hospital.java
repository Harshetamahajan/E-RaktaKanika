package com.example.demo.entities;


import javax.persistence.*;


@Entity
@Table(name="Hospital")
public class Hospital 
{


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int hp_id;


	@Column
	private String hp_name;
	
	@Column
	private String hp_regno;
	
	
	@OneToOne
	@JoinColumn(name="address_id")
	Address address_id;
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;


	public Hospital() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Hospital(String hp_name, String hp_regno,Address address_id, Login login_id) {
		super();
		this.hp_name = hp_name;
		this.hp_regno = hp_regno;
		this.address_id = address_id;
		this.login_id = login_id;
	}


	public int getHp_id() {
		return hp_id;
	}


	public void setHp_id(int hp_id) {
		this.hp_id = hp_id;
	}


	public String getHp_name() {
		return hp_name;
	}


	public void setHp_name(String hp_name) {
		this.hp_name = hp_name;
	}


	public String getHp_regno() {
		return hp_regno;
	}


	public void setHp_regno(String hp_regno) {
		this.hp_regno = hp_regno;
	}


	

	public Address getAddress_id() {
		return address_id;
	}


	public void setAddress_id(Address address_id) {
		this.address_id = address_id;
	}


	public Login getLogin_id() {
		return login_id;
	}


	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}


	@Override
	public String toString() {
		return "Hospital [hp_id=" + hp_id + ", hp_name=" + hp_name + ", hp_regno=" + hp_regno + ", address_id="
				+ address_id + ", login_id=" + login_id + "]";
	}
	
	
	
}






