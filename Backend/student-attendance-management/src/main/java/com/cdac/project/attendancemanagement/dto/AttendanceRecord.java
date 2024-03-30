package com.cdac.project.attendancemanagement.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter


public class AttendanceRecord {
    private Long id;
    private String moduleName;
    private String studentName;
    private LocalDate date;
    private boolean present;

}
