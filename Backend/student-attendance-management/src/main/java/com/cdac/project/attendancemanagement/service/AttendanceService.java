package com.cdac.project.attendancemanagement.service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.attendancemanagement.dto.AttendanceDTO;
import com.cdac.project.attendancemanagement.dto.AttendanceRecord;
import com.cdac.project.attendancemanagement.exception.ResourceNotFoundException;
import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Session;
import com.cdac.project.attendancemanagement.model.Student;
import com.cdac.project.attendancemanagement.repository.AttendanceRepository;
import com.cdac.project.attendancemanagement.repository.SessionRepository;
import com.cdac.project.attendancemanagement.repository.StudentRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AttendanceService {
	
	@Autowired
	private AttendanceRepository attrepo;
	@Autowired
	private SessionRepository sessionrepo;
	
	@Autowired
    private StudentRepository studentRepository;
	
	public List<Attendance> getAllAttendance(){
		return attrepo.findAll();
	}
	
	public List<Attendance> getAllAttendanceOfSession(Long sessionId) throws ResourceNotFoundException {
//	    Session session = sessionrepo.findById(sessionId)
//	        .orElseThrow(() -> new ResourceNotFoundException("Session not found with id " + sessionId));
	    return attrepo.findBySessionId(sessionId);
	}
	
	public List<Attendance> getAttendanceByStudentId(Long studentId) {
	    return attrepo.findByStudentSId(studentId);
	}

//	public Attendance markAttendance(Attendance attendance) {
//        return attrepo.save(attendance);
//    }
//	public List<Attendance> markAttendanceBySession(Long sessionId, List<Long> studentIds) {
//        List<Attendance> attendances = new ArrayList<>();
//        for (Long studentId : studentIds) {
//            Attendance attendance = new Attendance();
//            attendance.setSessionId(sessionId);
//            attendance.setStudentId(studentId);
//            // Set other fields as needed
//            attrepo.save(attendance);
//            attendances.add(attendance);
//        }
//        return attendances;
//    }
	
//	public Attendance markAttendance(Long sessionId, Long studentId, boolean present) {
//        Attendance attendance = new Attendance();
//        Session session = new Session();
//        session.setId(sessionId);
//        attendance.setSession(session);
//        Student student = new Student();
//        student.setSId(studentId);
//        attendance.setStudent(student);
//        attendance.setPresent(present);
//        
//        attendance.setDate(new Date());
//        
//        return attrepo.save(attendance);
//    }	

	    public List<Attendance> getAllAttendances() {
	        return attrepo.findAll();
	    }
	    
    public void deleteAttendance(long attendanceId) {
        attrepo.deleteById(attendanceId);
    }

	public List<Attendance> getAttendanceBySessionId(Long sessionId) {
		
		return attrepo.findBySessionId(sessionId);
	}

//	public void markAttendance(List<AttendanceDTO> attendanceData) {
//        for (AttendanceDTO dto : attendanceData) {
//            // Fetch session and student entities
//            Session session = sessionrepo.findById(dto.getSessionId()).orElse(null);
//            Student student = studentRepository.findById(dto.getStudentId()).orElse(null);
//            
//            if (session != null && student != null) {
//                Attendance attendance = new Attendance();
//                attendance.setSession(session);
//                attendance.setStudent(student);
//                attendance.setDate(dto.getDate());
//                attendance.setPresent(dto.getStatus().equalsIgnoreCase("present")); // Assuming status is either "present" or "absent"
//                attrepo.save(attendance);
//            }
//        }
//    }

	
	
	public void markAttendance(List<AttendanceDTO> attendanceData) {
		 List<Attendance> attendanceList = new ArrayList<>();
        for (AttendanceDTO dto : attendanceData) {
            Attendance attendance = new Attendance();
            
            // Set session
            Session session = sessionrepo.findByModuleName(dto.getModuleName())
                .orElseThrow(() -> new ResourceNotFoundException("Session not found with module name: " + dto.getModuleName()));
            attendance.setSession(session);
            
            // Set student
            Student student = studentRepository.findByPrn(dto.getPrn())
                .orElseThrow(() -> new ResourceNotFoundException("Student not found with PRN: " + dto.getPrn()));
            attendance.setStudent(student);
            
            // Set other fields
            attendance.setDate(new Date());
            attendance.setStatus(dto.getStatus());
            attendanceList.add(attendance);
            // Save the attendance record
        }

        attrepo.saveAll(attendanceList);
    }

	public void deleteAttendanceByName(String name) {
	    List<Attendance> attendanceList = attrepo.findByStudentName(name);
	    attrepo.deleteAll(attendanceList);
	    
	}
	public List<Attendance> getAttendanceByDate(LocalDate date) {
	    return attrepo.findByDate(date);
	}

	public List<Attendance> getAttendanceByStudentName(String studentName) {
		// TODO Auto-generated method stub
		return null;
	}
	
	


}
