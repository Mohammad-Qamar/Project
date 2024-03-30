// TeacherResponseDTO.java
package com.cdac.project.attendancemanagement.dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class TeacherResponseDTO {
	
	
    private Long teacherId;
    private String name;
    private String username;
    private String email;
    private String moduleName;
}
