package com.cdac.project.attendancemanagement.dto;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AttendanceDTO {
    
    @JsonProperty("moduleName")
    private String moduleName;
    
    @JsonProperty("date")
    private Date date;
    
    @JsonProperty("prn")
    private Long prn;
    
    @JsonProperty("studentName")
    private String studentName;
    
    @JsonProperty("status")
    private String status;
    
    
    public void setDate(Date date) {
        this.date = date;
    }



}
