package com.cdac.project.attendancemanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.attendancemanagement.model.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long> {
	public Optional<Admin> findByEmail(String email);
	
}
