package com.jr.studentsystem.service;

import java.util.List;

import com.jr.studentsystem.model.Student;

public interface StudentService {
	public Student saveStudents(Student student);
	public List<Student> getAllStudents();
}
