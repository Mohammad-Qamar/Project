package com.cdac.project.attendancemanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.attendancemanagement.model.Admin;
import com.cdac.project.attendancemanagement.model.Student;
import com.cdac.project.attendancemanagement.model.Teacher;
import com.cdac.project.attendancemanagement.repository.AdminRepository;
import com.cdac.project.attendancemanagement.repository.StudentRepository;
import com.cdac.project.attendancemanagement.repository.TeacherRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminService {
	
	
	@Autowired
	private AdminRepository arepo;
	
	@Autowired
    private TeacherRepository teacherRepository;
	
	@Autowired
	private StudentRepository srepo;

    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }
    public Optional<Teacher> getTeacher(long id){
		return teacherRepository.findById(id);
	}
    public Teacher registerteacher(Teacher teacher) {
		return teacherRepository.save(teacher);
	}
    
    public void deleteTeacher(long id) {
    	teacherRepository.deleteById(id);
	}
    public List<Student> getAllStudent(){
    	return srepo.findAll();
    }
    public Optional<Student> getStudent(Long id) {
		return srepo.findById(id);
	}
	
	public List<Admin> getAllAdmins(){
		return arepo.findAll();
	}
	
	public Student registerStudent(Student s) {
		return srepo.save(s);
	}
	public void deleteStudent(Long studentId) {
        srepo.deleteById(studentId);
   }

	public Admin registerAdmin(Admin a) {
		return arepo.save(a);
	}
	
	
	
//	public void approveTeacherRegistration(Long teacherId) {
//	    Optional<Teacher> teacherOptional = teacherRepository.findById(teacherId);
//	    if (teacherOptional.isPresent()) {
//	        Teacher teacher = teacherOptional.get();
//	        teacher.setStatus("Approved");
//	        teacherRepository.save(teacher);
//	    } else {
//	        throw new RuntimeException("Teacher not found with ID: " + teacherId);
//	    }
//	}
//
//    public void rejectTeacherRegistration(Long teacherId) {
//        Optional<Teacher> teacherOptional = teacherRepository.findById(teacherId);
//           	if (teacherOptional.isPresent()) {
//                Teacher teacher = teacherOptional.get();
//                teacher.setStatus("Rejected");
//                teacherRepository.save(teacher);
//            } else {
//                throw new RuntimeException("Teacher not found with ID: " + teacherId);
//            }
//    }

	public Optional<Admin> loginAdmin(String email){
		
		return arepo.findByEmail(email);
	}
//	
//	public Admin updateAdmin(Long id, Admin adminDetails) {
//        Admin admin = arepo.findById(id).orElse(null);
//        if (admin != null) {
//            admin.setEmail(adminDetails.getEmail());
//            admin.setPassword(adminDetails.getPassword());
//            return arepo.save(admin);
//        }
//        return null;
//	}
	
	public void deleteAdmin(Long id) {
		arepo.deleteById(id);
	}
}
