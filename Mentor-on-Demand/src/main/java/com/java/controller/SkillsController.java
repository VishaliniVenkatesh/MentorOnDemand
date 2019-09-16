package com.java.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.Entity.Mentor;
import com.java.Entity.MentorSkills;
import com.java.Entity.Skills;
import com.java.model.SearchModel;
import com.java.repo.MentorRepository;
import com.java.repo.MentorSkillsRepository;
import com.java.repo.SkillsRepository;
import com.java.repo.TrainingsRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class SkillsController {
	
	@Autowired
	private TrainingsRepository repository;
	
	@Autowired
	private MentorRepository mentor_repository;

	 
	@Autowired
	private SkillsRepository skills_repository;
	
	@Autowired
	private MentorSkillsRepository mentorskills_repository;
	
	
	
	@GetMapping("/getSkills/{skill_id}")
	public Optional<Skills> getSkillsById(@PathVariable("skill_id") long skill_id) {
		
		Optional<Skills> skillsDetails = skills_repository.findById(skill_id);
		return skillsDetails;
	}
	
	
	@GetMapping("/getSkillsByName/{name}")
	public List<SearchModel> getSkillsBYName(@PathVariable("name") String name) {

		List<Skills> skillsDetails = skills_repository.getSkillsBYName(name);
		List<SearchModel> traningsm_list=Mentorskills(skillsDetails);
		return traningsm_list;
	}
	public List<SearchModel> Mentorskills(List<Skills> skillsDetails)
	{
	
		List<SearchModel> traningsmodel_list = new ArrayList<SearchModel>();
		for(Skills skill:skillsDetails)
		{
			long mentor_id = skill.getMentor_id() ;
			Optional<Mentor> mentor = mentor_repository.findById( mentor_id);
			Optional<MentorSkills> mentorSkills = mentorskills_repository.findById( mentor_id);
			
			long skill_id = skill.getSkill_id();
			Optional<Skills> skills = skills_repository.findById(skill_id);
			
			SearchModel tmodel = new SearchModel(skill.getMentor_id() , mentor.get().getUsername(),skill.getSkill_id(),skill.getName(),mentorSkills.get().getSelf_rating(),mentorSkills.get().getYears_of_exp(),  mentorSkills.get().getFacilities_offered());
			
			traningsmodel_list.add(tmodel);
		}
		
		return traningsmodel_list;
	}

	

}
