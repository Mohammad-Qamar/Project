package com.cdac.project.attendancemanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Student;
import com.cdac.project.attendancemanagement.repository.AttendanceRepository;
import com.cdac.project.attendancemanagement.repository.StudentRepository;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class StudentService {
	
	
	@Autowired
	private StudentRepository srepo;
	@Autowired
    private AttendanceRepository attendanceRepository;
	
	public List<Student> getAllStudents(){
		return srepo.findAll();
	}
	
	public Optional<Student> getStudent(Long id) {
		return srepo.findById(id);
	}
	
	public Student registerStudent(Student student) {
        return srepo.save(student);
    }
	
	public Optional<Student> loginStudent(String email){
		return srepo.findByEmail(email);
	}
	public void deleteStudent(long prn) {
         srepo.deleteByPrn(prn);
    }
	
	public List<Attendance> getAttendanceByStudentId(Long studentId) {
        return attendanceRepository.findByStudentSId(studentId);
    }
}
