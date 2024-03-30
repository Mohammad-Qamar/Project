package com.cdac.project.attendancemanagement.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.attendancemanagement.model.User;
import com.cdac.project.attendancemanagement.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepository urepo;
	
	public User registerUser(User u) {
		return urepo.save(u);
	}
	public Optional<User> getUserByUsername(String username) {
        return urepo.findByUsername(username);
    }
	
	
	public Optional<User> loginUser(String username){
		return urepo.findByUsername(username);
	}
	
	public User updateUser(Long id, User userDetails) {
        User user = urepo.findById(id).orElse(null);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            return urepo.save(user);
        }
        return null;
	}
}
