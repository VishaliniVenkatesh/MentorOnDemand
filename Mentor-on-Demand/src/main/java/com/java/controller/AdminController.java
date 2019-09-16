package com.java.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.java.Entity.Mentor;
import com.java.Entity.User;
import com.java.repo.MentorRepository;
import com.java.repo.SkillsRepository;
import com.java.repo.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AdminController {
	
	
	@Autowired
	private MentorRepository mentor_repository;
	
	@Autowired
	private UserRepository user_repository;
	
	@Autowired
	private SkillsRepository skills_repository;
	
	@GetMapping("/admin/mentor/getDetails")
	public Iterable<Mentor> getAllMentorDetails() {
		
		Iterable<Mentor> mentors = mentor_repository.findAll();
		return mentors;
	}
	
	@GetMapping("/admin/user/getDetails")
	public Iterable<User> getAllUserDetails() {
		
		Iterable<User> users = user_repository.findAll();
		return users;
	}
	
	@GetMapping("/admin/skills/getDetails")
	public List<String> getAllSkillsDetails() {
		List<String> skills = skills_repository.getAllSkillsDetails();
		return skills;
	}
	
}
