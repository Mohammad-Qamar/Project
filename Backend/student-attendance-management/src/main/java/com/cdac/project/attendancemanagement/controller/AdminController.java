package com.cdac.project.attendancemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.attendancemanagement.exception.ResourceNotFoundException;
import com.cdac.project.attendancemanagement.model.Admin;
import com.cdac.project.attendancemanagement.model.Teacher;
import com.cdac.project.attendancemanagement.service.AdminService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/api/admin")
public class AdminController {
	
	
	@Autowired
	private AdminService aservice;
	
	@PostMapping("/register")
	public ResponseEntity<String> createAdmin(@Validated @RequestBody Admin admin){
		try {
			Admin registerAdmin = aservice.registerAdmin(admin);
			if(registerAdmin != null) {
				return ResponseEntity.ok("Registeration Successful");
			}
			else {
				return ResponseEntity.badRequest().body("Registration failed");
			}
		}
		catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An Error Ocurred : "+ e.getMessage());
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<Boolean> loginAdmin(@Validated @RequestBody Admin admin) throws ResourceNotFoundException
	{
		Boolean isAuthenticated =false;
		String email = admin.getEmail();
		String password = admin.getPassword();
		
		Admin a = aservice.loginAdmin(email).orElseThrow();
		if(email.equals(a.getEmail()) && password.equals(a.getPassword()) )
		{
			isAuthenticated= true;
		}
		return ResponseEntity.ok(isAuthenticated);
	}
	
//	@GetMapping("/teachers")
//    public List<Teacher> getAllTeachers() {
//        return aservice.getAllTeachers();
//    }
	
	@DeleteMapping("/deleteTeacher{id}")
	public void deleteTeacher(@PathVariable  Long id) {
		aservice.deleteTeacher(id);
	}

//    @PutMapping("/approve-teacher/{teacherId}")
//    public ResponseEntity<String> approveTeacher(@PathVariable Long teacherId) {
//        aservice.approveTeacherRegistration(teacherId);
//        return ResponseEntity.ok("Teacher approved successfully");
//    }
//
//    @DeleteMapping("/reject-teacher/{teacherId}")
//    public ResponseEntity<String> rejectTeacher(@PathVariable Long teacherId) {
//        aservice.rejectTeacherRegistration(teacherId);
//        return ResponseEntity.ok("Teacher rejected successfully");
//    }
//	
}
