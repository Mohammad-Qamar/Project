package com.cdac.project.attendancemanagement.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter


@Entity
public class SessionDto {
    @Id
	private Long id;
    private String module_name;
    private LocalDateTime date;
    
    // Constructors, getters, and setters
}