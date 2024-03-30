package com.cdac.project.attendancemanagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Teacher;

public interface TeacherRepository  extends JpaRepository<Teacher, Long>{

	public Optional<Teacher> findByEmail(String email);
	public Teacher findByUsername(String username);

	public void deleteByEmail(String email);

	//public List<Attendance> findBySessionId(Long sessionId);
//	public Teacher findByEmail(String email);
}	
