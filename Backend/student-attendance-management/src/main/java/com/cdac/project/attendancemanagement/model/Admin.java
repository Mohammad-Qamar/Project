package com.cdac.project.attendancemanagement.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter


@Entity
@Table(name="Admin")
public class Admin {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;
	
	private String username;
    private String password;
    private String email;

	
	
		
	
}
