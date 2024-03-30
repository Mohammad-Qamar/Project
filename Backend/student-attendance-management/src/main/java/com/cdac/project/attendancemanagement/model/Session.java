package com.cdac.project.attendancemanagement.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

@Entity
@Table(name="Session", indexes = {@Index(name = "idx_module_name", columnList = "module_name")})
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String moduleName;
    
    @OneToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
    
    @OneToMany(mappedBy = "session", cascade = CascadeType.ALL)
    private List<Attendance> attendances;
    
    private LocalDateTime date;

 }

