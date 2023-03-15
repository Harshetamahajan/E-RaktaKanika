package com.example.demo.entities;

import javax.persistence.*;


@Entity
@Table(name = "login")
public class Login 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int login_id;
	
	@Column
	private String password;
	
	@Column
	private String email;
	
	@Column
	private String contactno;
	
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;
	
	@Column
	private boolean status;
	
	@Column
	private boolean del_profile;

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(int login_id, String password, String email, String contactno, Role role_id) {
		super();
		this.login_id = login_id;
		this.password = password;
		this.email = email;
		this.contactno = contactno;
		this.role_id = role_id;
		this.status = false;
		this.del_profile = false;
	}

	public Login(String password, String email, String contactno, Role role_id) {
		super();
		this.password = password;
		this.email = email;
		this.contactno = contactno;
		this.role_id = role_id;
		this.status = false;
		this.del_profile = false;
	}
	
	

	public Login(String password, String email, String contactno, Role role_id, boolean status) {
		super();
		this.password = password;
		this.email = email;
		this.contactno = contactno;
		this.role_id = role_id;
		this.status = status;
		this.del_profile = false;
	}

	public int getLogin_id() {
		return login_id;
	}

	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public Role getRole_id() {
		return role_id;
	}

	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public boolean isDel_profile() {
		return del_profile;
	}

	public void setDel_profile(boolean del_profile) {
		this.del_profile = del_profile;
	}

	@Override
	public String toString() {
		return "Login [login_id=" + login_id + ", password=" + password + ", email=" + email + ", contactno="
				+ contactno + ", role_id=" + role_id + ", status=" + status + ", del_profile=" + del_profile + "]";
	}

	
	
	
	
	
	
	
	
	
	
	
}
