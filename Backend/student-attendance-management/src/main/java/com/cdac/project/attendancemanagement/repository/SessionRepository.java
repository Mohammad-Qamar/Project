package com.cdac.project.attendancemanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.attendancemanagement.model.Session;
import com.cdac.project.attendancemanagement.model.Student;

public interface SessionRepository extends JpaRepository<Session, Long>{

	Optional<Session> findByModuleName(String moduleName);
	
}
