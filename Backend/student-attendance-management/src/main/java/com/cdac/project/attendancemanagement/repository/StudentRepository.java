package com.cdac.project.attendancemanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.attendancemanagement.model.Session;
import com.cdac.project.attendancemanagement.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

	public Optional<Student> findByEmail(String email);

	public void deleteByPrn(long prn);

	public Optional<Student> findByPrn(Long prn);	
	
}
