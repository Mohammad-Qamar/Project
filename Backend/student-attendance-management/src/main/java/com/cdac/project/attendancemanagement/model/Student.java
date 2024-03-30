package com.cdac.project.attendancemanagement.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="students")
public class Student { 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long SId;
	@Column(unique = true)
	private long prn;
	private String name;
	private String username;
	private String email;
    private String password;
    
//    
//    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
//    private List<Attendance> attendances;

	
}
