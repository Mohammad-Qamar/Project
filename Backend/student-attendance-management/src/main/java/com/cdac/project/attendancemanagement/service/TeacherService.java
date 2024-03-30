package com.cdac.project.attendancemanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.attendancemanagement.dto.TeacherResponseDTO;
import com.cdac.project.attendancemanagement.model.Admin;
import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Teacher;
import com.cdac.project.attendancemanagement.repository.TeacherRepository;

import jakarta.transaction.Transactional;



@Service
@Transactional
public class TeacherService {
	
	@Autowired
	private TeacherRepository trepo;
	
	public List<Teacher> getAllTeachers(){
		return trepo.findAll();
	}
	
	public Optional<Teacher> getTeacher(long id){
		return trepo.findById(id);
	}
	public Teacher registerteacher(Teacher teacher) {
		return trepo.save(teacher);
	}
	
	public void deleteTeacher(long id) {
		trepo.deleteById(id);
	}
	
	public Optional<Teacher> loginTeacher(String email){
		
		return trepo.findByEmail(email);
	}
	public void deleteteacher(Long teacherId) {
		trepo.deleteById(teacherId);
		
	}
//	public List<Attendance> getAttendanceBySessionId(Long sessionId) {
//		
//		return trepo.findBySessionId(sessionId);
//	}

	public void deleteteacherByEmail(String email) {
		trepo.deleteByEmail(email);
		
	}

	public Teacher getTeacherByUsername(String username) {	
		return trepo.findByUsername(username);
	}
	
	
	
	
	
	
	
}
