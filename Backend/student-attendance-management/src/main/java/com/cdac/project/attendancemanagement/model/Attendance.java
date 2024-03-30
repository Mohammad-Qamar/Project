package com.cdac.project.attendancemanagement.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
public class Attendance {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attendanceId;
    
    @ManyToOne
    @JoinColumn(name="student_name")
    private Student student;    
    
    @ManyToOne
    @JoinColumn(name="session_moduleName", referencedColumnName = "moduleName")
    private Session session;
    
    @Temporal(TemporalType.DATE)
    private Date date;
    
    private String status;
}
