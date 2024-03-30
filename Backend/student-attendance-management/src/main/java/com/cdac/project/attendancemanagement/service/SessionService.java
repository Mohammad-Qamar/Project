package com.cdac.project.attendancemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.attendancemanagement.model.Session;
import com.cdac.project.attendancemanagement.repository.SessionRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class SessionService {
	
	
	
	@Autowired
	private SessionRepository srepo;
	
	public List<Session> getAllSessions() {
        return srepo.findAll();
    }

    public Session createSession(Session session) {
        return srepo.save(session);
    }

    public void deleteSession(Long sessionId) {
    	srepo.deleteById(sessionId);
    }
	
	public Session getSessionById(Long sessionId) {
        // Retrieve session details by ID from the repository
        return srepo.findById(sessionId).orElse(null);
    }
	
}
