package com.java.model;



public class TrainingsModel {
		
	private long tid;
	private String username;
	private String mentor_name;
	private String skill_name;
	private int rating;
	private double progress;
	private String status;
	
	public TrainingsModel()
	{
		
	}
	public TrainingsModel(long tid, String username, String mentor_name, String skill_name, int rating,String status,
			double progress) {
		super();
		this.tid = tid;
		this.username = username;
		this.mentor_name = mentor_name;
		this.skill_name = skill_name;
		this.rating = rating;
		this.progress = progress;
		this.status=status;
	}
	public long getTid() {
		return tid;
	}
	public void setTid(long tid) {
		this.tid = tid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMentor_name() {
		return mentor_name;
	}
	public void setMentor_name(String mentor_name) {
		this.mentor_name = mentor_name;
	}
	public String getSkill_name() {
		return skill_name;
	}
	public void setSkill_name(String skill_name) {
		this.skill_name = skill_name;
	}
	
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public double getProgress() {
		return progress;
	}
	public void setProgress(double progress) {
		this.progress = progress;
	}
	@Override
	public String toString() {
		return "TrainingDetails [tid=" + tid + ", username=" + username + ", mentor_name=" + mentor_name+", Status=" + status
				+ ", skill_name=" + skill_name + ", rating=" + rating + ", progress=" + progress + "]";
	}
	
}

