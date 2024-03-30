package com.cdac.project.attendancemanagement.controller;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeParseException;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.attendancemanagement.dto.AttendanceDTO;
import com.cdac.project.attendancemanagement.dto.TeacherResponseDTO;
import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Teacher;
import com.cdac.project.attendancemanagement.service.AttendanceService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {
	private static final Logger logger = LoggerFactory.getLogger(AttendanceController.class);
	
    @Autowired
    private AttendanceService attendanceService;

//    @PostMapping("/mark")
//    public ResponseEntity<Attendance> markAttendance(@RequestBody Attendance attendance) {
//    	Long session = attendance.getSession().getId();
//        Long studentId = attendance.getStudent().getSId();
//        boolean present = attendance.isPresent();
// 	
//    	Attendance att = attendanceService.markAttendance(session,studentId, present);
//        
//        
//        return ResponseEntity.status(HttpStatus.CREATED).body(att);
//       
////        return ResponseEntity.ok("Attendance marked successfully");
//    }
    
    
    
//    @PostMapping("/markAttendance")
//    public ResponseEntity<String> markAttendance(@RequestBody List<AttendanceDTO> attendanceData) {
//        try {
//            attendanceService.markAttendance(attendanceData);
//            return ResponseEntity.ok("Attendance marked successfully!");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("Failed to mark attendance. Error: " + e.getMessage());
//        }
//    }
    
    
   // public List<Attendance> getAttendanceBySessionId(Long sessionId) {
//		
//		return trepo.findBySessionId(sessionId);
//	}
    	@GetMapping("/attendance/{sessionId}")
      public List<Attendance> getAttendanceBySessionId(@PathVariable Long sessionId) {
          return attendanceService.getAttendanceBySessionId(sessionId);
      }
 
    	
    	
    	
    	@DeleteMapping("/attendance/{name}")
    	public ResponseEntity<String> deleteAttendanceByName(@PathVariable String name) {
    	    try {
    	        attendanceService.deleteAttendanceByName(name);
    	        return ResponseEntity.ok("Attendance deleted successfully for student: " + name);
    	    } catch (Exception e) {
    	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    	                .body("Failed to delete attendance. Error: " + e.getMessage());
    	    }
    	}





    	
    	@PostMapping("/markAttendance")
    	public ResponseEntity<String> markAttendance(@Validated @RequestBody List<AttendanceDTO> attendanceData) {
    	    try {
    	        attendanceService.markAttendance(attendanceData);
    	        return ResponseEntity.ok("Attendance marked successfully!");
    	    } catch (Exception e) {
    	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    	                .body("Failed to mark attendance. Error: " + e.getMessage());
    	    }
    	}
    	
    	@GetMapping("/viewAttendance/{date}")
    	public ResponseEntity<List<AttendanceDTO>> getAttendance(@PathVariable("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) String dateString) {
    	    try {
    	        LocalDate date = LocalDate.parse(dateString);
    	        List<Attendance> attendanceList = attendanceService.getAttendanceByDate(date);
    	        List<AttendanceDTO> attendanceDTOList = convertToDTO(attendanceList);
    	        return ResponseEntity.ok(attendanceDTOList);
    	    } catch (DateTimeParseException e) {
    	        // Handle invalid date format error
    	        logger.error("Invalid date format: " + dateString, e);
    	        return ResponseEntity.badRequest().body(Collections.emptyList());
    	    } catch (Exception e) {
    	        // Log the error for debugging purposes
    	        logger.error("Failed to fetch attendance for date: " + dateString, e);
    	        
    	        // Return an empty list of AttendanceDTO with internal server error status
    	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    	                .body(Collections.emptyList());
    	    }
    	}
    	private List<AttendanceDTO> convertToDTO(List<Attendance> attendanceList) {
    	    return attendanceList.stream()
    	            .map(attendance -> {
    	                AttendanceDTO dto = new AttendanceDTO();
    	                dto.setModuleName(attendance.getSession().getModuleName());
    	                
    	                // Convert java.util.Date to java.time.LocalDate directly
    	                dto.setDate(attendance.getDate());
    	                
    	                dto.setPrn(attendance.getStudent().getPrn());
    	                dto.setStudentName(attendance.getStudent().getName());
    	                dto.setStatus(attendance.getStatus());
    	                return dto;
    	            })
    	            .collect(Collectors.toList());
    	}

    	
    	
    	
    	



}

