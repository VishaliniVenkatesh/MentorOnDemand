package com.java.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.java.Entity.Mentor;
import com.java.Entity.MentorSkills;
import com.java.Entity.Skills;
import com.java.Entity.Trainings;
import com.java.Entity.User;
import com.java.model.TrainingsModel;
import com.java.repo.MentorRepository;
import com.java.repo.MentorSkillsRepository;
import com.java.repo.SkillsRepository;
import com.java.repo.TrainingsRepository;
import com.java.repo.UserRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MentorController  {
	@Autowired
	private MentorRepository mentor_repository;
	@Autowired
	private TrainingsRepository repository;
	@Autowired
	private UserRepository user_repository;
	 
	@Autowired
	private SkillsRepository skills_repository;
	@Autowired
	private MentorSkillsRepository mentorSkillsrepository;

	
	@GetMapping("/login/get/Mentor")
	public Iterable<Mentor> getAllDetails() {
		
		Iterable<Mentor> credentials = mentor_repository.findAll();
		return credentials;
	}
	
	
	@PostMapping(value = "/mentor/detail/create")
	public Mentor postMentors(@RequestBody Mentor mentor) {
		Mentor insert_mentor=mentor_repository.save(new Mentor (mentor.getEmail() , mentor.getPassword(),mentor.getUsername(),mentor.getLinkedin_url() ,mentor.getReg_datetime() ,mentor.getReg_code() ,mentor.getActive(),mentor.getYear_of_experience()));
		return insert_mentor;
	}

	@GetMapping("/mentor/getDetails/{mid}")
	public Optional<Mentor> getAllDetails(@PathVariable("mid") long mid) {
		Optional<Mentor> mentorSkills = mentor_repository.findById(mid);
		return mentorSkills;
	}
	

	@GetMapping("/mentor/getSearch/{skill_name}")
	public List<MentorSkills> getAllSearchDetails(@PathVariable("skill_name") String skill_name){
		List<MentorSkills> mentorDetails = mentorSkillsrepository.getBySkillName(skill_name);
	return mentorDetails;
	}
	
	@GetMapping("/mentor/getCompleted/{mentor_id}")
	public List<TrainingsModel> getAllCompletedTraining(@PathVariable("mentor_id") long mentor_id)
	{
		List<Trainings> trainings_list = repository.getAllCompletedTraining(mentor_id);
		List<TrainingsModel> traningsm_list=trainings(trainings_list);
		return traningsm_list;
	}
	
	@GetMapping("/mentor/getOnProgress/{mentor_id}")
	public List<TrainingsModel> getAllOnProgress(@PathVariable("mentor_id") long mentor_id)
	{
		
		 List<Trainings> tranings_list = repository.getAllOnProgress(mentor_id);
			List<TrainingsModel> traningsm_list=trainings(tranings_list);
			return traningsm_list;
	}
	
	public List<TrainingsModel> trainings(List<Trainings> trainings_list)
	{
		List<TrainingsModel> traningsmodel_list = new ArrayList<TrainingsModel>();
		for(Trainings trainings:trainings_list)
		{
			long mentor_id = trainings.getMentor_id();
			Optional<Mentor> mentor = mentor_repository.findById( mentor_id);
			
			long user_id = trainings.getUser_id();
			Optional<User> user = user_repository.findById(user_id);
		
			long skill_id = trainings.getUser_id();
			Optional<Skills> skills = skills_repository.findById(skill_id);
		
			TrainingsModel tmodel = new TrainingsModel( trainings.getTid(), user.get().getEmail(), mentor.get().getUsername(), skills.get().getName() ,trainings.getRating(),trainings.getStatus(),trainings.getProgress());
			
			traningsmodel_list.add(tmodel);
		}
		
		return traningsmodel_list;
	}
	
	

}
