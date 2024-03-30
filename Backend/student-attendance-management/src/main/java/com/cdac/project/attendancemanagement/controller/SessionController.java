package com.cdac.project.attendancemanagement.controller;
import com.cdac.project.attendancemanagement.dto.TeacherResponseDTO;
import com.cdac.project.attendancemanagement.model.Session;
import com.cdac.project.attendancemanagement.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/session")
public class SessionController {

    @Autowired
    private SessionService sessionService;

    @GetMapping("/{sessionId}/teacher")
    public ResponseEntity<TeacherResponseDTO> getTeacherBySessionId(@PathVariable Long sessionId) {
        try {
            // Fetch session details by ID
            Session session = sessionService.getSessionById(sessionId);

            // If session not found, return 404 Not Found response
            if (session == null) {
                return ResponseEntity.notFound().build();
            }

            // Map session details to TeacherResponseDTO
            TeacherResponseDTO teacherResponseDTO = new TeacherResponseDTO();
            teacherResponseDTO.setTeacherId(session.getTeacher().getTeacherId());
            teacherResponseDTO.setName(session.getTeacher().getName());
            teacherResponseDTO.setModuleName(session.getModuleName());

            // Return the mapped DTO in response body
            return ResponseEntity.ok(teacherResponseDTO);
        } catch (Exception e) {
            // If an error occurs, return 500 Internal Server Error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
