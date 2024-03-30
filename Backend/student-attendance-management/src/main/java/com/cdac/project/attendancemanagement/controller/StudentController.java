package com.cdac.project.attendancemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Student;
import com.cdac.project.attendancemanagement.service.StudentService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/students")
public class StudentController {

	@Autowired
	private StudentService stservice;
	
	
	@PostMapping("/register")
	public ResponseEntity<String> registerStudent(@Validated @RequestBody Student student){
		try {
				Student registerStudent = stservice.registerStudent(student);
				if(registerStudent != null) {
				return ResponseEntity.ok("Registeration Successful");
				}
				else {
					return ResponseEntity.badRequest().body("Registeration Failed");
				}
		}
		catch(Exception e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An Error Occured " + e.getMessage());
		}
		
	} 
	
	
		@PostMapping("/login")
		public ResponseEntity<Boolean> loginStudent(@Validated @RequestBody Student student) throws ResourceNotFoundException
		{
			Boolean isAuthenticated = false;
			String email = student.getEmail();
			String password = student.getPassword();
			
			Student s = stservice.loginStudent(email).orElseThrow();
			if(email.equals(s.getEmail()) && password.equals(s.getPassword()) )
			{
				isAuthenticated= true;
			}
			return ResponseEntity.ok(isAuthenticated);
		}
		@GetMapping("/view")
		public List<Student> viewStudent(){
			return stservice.getAllStudents();
		}
		
		@GetMapping("/attendance/{StudentId}")
	    public List<Attendance> getAttendanceByUserId(@PathVariable Long StudentId) {
	        return stservice.getAttendanceByStudentId(StudentId);
	    }
		@DeleteMapping("/delete/{prn}")
		public void deleteStudent(@PathVariable long prn) {
			stservice.deleteStudent(prn);
		}
		
		
		
		
		
		
		
		
		
			
		
//		@GetMapping("/attendance")
//	    public ResponseEntity<List<AttendanceDTO>> getStudentAttendance() {
//	        try {
//	            // Get the username of the logged-in student
//	            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//	            String studentName = authentication.getName();
//	            
//	            // Fetch attendance records for the logged-in student
//	            List<Attendance> attendanceList = attendanceService.getAttendanceByStudentName(studentName);
//	            
//	            // Convert the attendance records to DTOs
//	            List<AttendanceDTO> attendanceDTOList = convertToDTO(attendanceList);
//	            
//	            // Return the DTOs in the response
//	            return ResponseEntity.ok(attendanceDTOList);
//	        } catch (Exception e) {
//	            // Log the error for debugging purposes
//	            logger.error("Failed to fetch attendance records for the logged-in student", e);
//	            
//	            // Return an empty list of AttendanceDTO with internal server error status
//	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//	                    .body(Collections.emptyList());
//	        }
//	    }
//
//	    private List<AttendanceDTO> convertToDTO(List<Attendance> attendanceList) {
//	        return attendanceList.stream()
//	                .map(attendance -> {
//	                    AttendanceDTO dto = new AttendanceDTO();
//	                    dto.setModuleName(attendance.getSession().getModuleName());
//	                    dto.setDate(attendance.getDate());
//	                    dto.setPrn(attendance.getStudent().getPrn());
//	                    dto.setStatus(attendance.getStatus());
//	                    return dto;
//	                })
//	                .collect(Collectors.toList());
//	    }
	
}
