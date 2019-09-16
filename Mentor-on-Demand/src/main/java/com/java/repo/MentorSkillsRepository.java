package com.java.repo;


import java.util.List;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.java.Entity.MentorSkills;


@Repository
public interface MentorSkillsRepository extends CrudRepository<MentorSkills, Long> {

	@Query(value="SELECT * FROM mentor_skills ms Where ms.skill_name=?", nativeQuery=true)
	public List<MentorSkills> getBySkillName(@Param("skill_name") String skill_name);

}
