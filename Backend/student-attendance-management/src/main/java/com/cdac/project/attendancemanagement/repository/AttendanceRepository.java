package com.cdac.project.attendancemanagement.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.attendancemanagement.model.Attendance;
import com.cdac.project.attendancemanagement.model.Session;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
	public List<Attendance> findBySessionId(Long sessionId);
//	public List<Attendance> findBySession(Long sessionId);
	public List<Attendance> findBySessionIdAndDate(Long sessionId, LocalDate date);
	public List<Attendance> findByStudentSId(Long sId);
//	public List<Attendance> findByPrn(long prn);
	public List<Attendance> findByStudentName(String name);
	public List<Attendance> findByDate(LocalDate date);
//	public List<Attendance> findByModuleNameAndStudentName(String moduleName, String studentName);

	
}
