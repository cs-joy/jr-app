package com.jr.studentsystem.repositoriy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jr.studentsystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	//

}
