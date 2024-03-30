package com.cdac.project.attendancemanagement.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.catalina.connector.Response;
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

import com.cdac.project.attendancemanagement.dto.TeacherResponseDTO;
import com.cdac.project.attendancemanagement.exception.ResourceNotFoundException;
import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Session;
import com.cdac.project.attendancemanagement.model.Teacher;
import com.cdac.project.attendancemanagement.repository.AttendanceRepository;
import com.cdac.project.attendancemanagement.service.AttendanceService;
import com.cdac.project.attendancemanagement.service.TeacherService;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/api/teacher")
public class TeacherController {
	
	@Autowired
	private TeacherService tservice;
	
	@Autowired
	private AttendanceService attservice;
//	@PostMapping("/register")
//	public ResponseEntity<String> addTeacher(@Validated @RequestBody Teacher teacher){
//		try {
//			Session session = teacher.getSession();
//			
//			session.setTeacher(teacher);
//			teacher.setSession(session);
//			
//			Teacher registerTeacher = tservice.registerteacher(teacher);
//			if(registerTeacher != null) {
//				return ResponseEntity.ok("Registeration Successful");
//			}
//			else {
//				return ResponseEntity.badRequest().body("Registeration failed");
//			}
//		}
//		catch(Exception e){
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//					.body("An Error Occurred"+ e.getMessage());
//		}
//	}
	
	
	@PostMapping("/register")
    public ResponseEntity<String> addTeacher(@Validated @RequestBody Teacher teacher){
        try {
            Session session = teacher.getSession();
            
            session.setTeacher(teacher);
            teacher.setSession(session);
            
            Teacher registerTeacher = tservice.registerteacher(teacher);
            if(registerTeacher != null) {
                // Create and return the DTO with the necessary fields
                TeacherResponseDTO responseDTO = new TeacherResponseDTO();
                responseDTO.setTeacherId(registerTeacher.getTeacherId());
                responseDTO.setUsername(registerTeacher.getUsername());
                responseDTO.setEmail(registerTeacher.getEmail());
                responseDTO.setModuleName(session.getModuleName());
                
                return ResponseEntity.ok("Registration Successful");
            }
            else {
                return ResponseEntity.badRequest().body("Registration failed");
            }
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An Error Occurred"+ e.getMessage());
        }
    }
	
	
	
	
	@PostMapping("/login")
	public ResponseEntity<Boolean> loginTeacher(@Validated @RequestBody Teacher teacher) throws ResourceNotFoundException{
		Boolean isAuthenticated = false;
		String email = teacher.getEmail();
		String password = teacher.getPassword();
		
		Teacher t = tservice.loginTeacher(email).orElseThrow();
		if(email.equals(t.getEmail()) && password.equals(t.getPassword())) {
			isAuthenticated = true;
		}
		return ResponseEntity.ok(isAuthenticated);
	}
	
	@GetMapping("/teachers")
	public ResponseEntity<List<TeacherResponseDTO>> getAllTeachers() {
	    List<Teacher> teachers = tservice.getAllTeachers();
	    
	    // Convert Teacher entities to TeacherResponseDTOs
	    List<TeacherResponseDTO> teacherDTOs = teachers.stream()
	            .map(teacher -> {
	                TeacherResponseDTO dto = new TeacherResponseDTO();
	                dto.setName(teacher.getName());
	                dto.setTeacherId(teacher.getTeacherId());
	                dto.setUsername(teacher.getUsername());
	                dto.setEmail(teacher.getEmail());
	                
	                // Fetch session for the teacher and set the moduleName if session exists
	                if (teacher.getSession() != null) {
	                    dto.setModuleName(teacher.getSession().getModuleName());
	                }
	                
	                return dto;
	            })
	            .collect(Collectors.toList());
	    
	    return ResponseEntity.ok(teacherDTOs);
	}	
	
	@GetMapping("/teacher/{username}")
	public ResponseEntity<TeacherResponseDTO> getTeacherByEmail(@PathVariable String username){
		Teacher teacher =tservice.getTeacherByUsername(username);
		
		if(teacher != null) {
			TeacherResponseDTO dto = new TeacherResponseDTO();
			dto.setName(teacher.getName());
			dto.setTeacherId(teacher.getTeacherId());
			dto.setUsername(teacher.getUsername());
			dto.setEmail(teacher.getEmail());
			
			if(teacher.getSession() != null) {
				dto.setModuleName(teacher.getSession().getModuleName());
			}
			 return ResponseEntity.ok(dto);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

//	@DeleteMapping("/delete{teacherId}")
//	private void deleteTeacher(Long teacherId) {
//		tservice.deleteteacher(teacherId);
//	}
	@DeleteMapping("/delete/{email}")
	private void deleteTeacherByEmail(@PathVariable String email) {
		tservice.deleteteacherByEmail(email);
	}
	
	
	@GetMapping("/attendance")
	public List<Attendance> getAttenadnace() {
		return attservice.getAllAttendance() ;
	}
	
	
	
	
}
