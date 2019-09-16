package com.java.repo;

import java.util.List;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.java.Entity.Trainings;


@Repository
public interface TrainingsRepository extends CrudRepository<Trainings, Long> {

	
	@Query(value="SELECT * FROM trainings  WHERE trainings.progress=100 and mentor_id=:mentor_id", nativeQuery=true)
	public List<Trainings> getAllCompletedTraining(@Param("mentor_id") long  mentor_id);
	
	//public List<Trainings> getAllCompletedTraining();
	
	@Query(value="SELECT * FROM trainings   WHERE trainings.progress<100 and mentor_id=:mentor_id", nativeQuery=true)
	public List<Trainings> getAllOnProgress(@Param("mentor_id") long  mentor_id);
	//public List<Trainings> getAllOnProgress();
	
	@Query(value="SELECT * FROM trainings   WHERE trainings.status='Finalize'", nativeQuery=true)
	public List<Trainings> getAllFinalize(@Param("tid") long  tid);

	@Query(value="SELECT * FROM trainings WHERE trainings.status='proposed' and mentor_id=:mentor_id", nativeQuery=true)
	public List<Trainings> getAllProposals(@Param("mentor_id") long  mentor_id);
	//public List<Trainings> getAllProposals();
	
	@Query(value="SELECT * FROM trainings   WHERE trainings.status='proposed'", nativeQuery=true)
	public List<Trainings> getAllApprove(@Param("tid") long  tid);
	//public List<Trainings> getAllApprove();
	
	@Query(value="SELECT * FROM trainings   WHERE trainings.status='approved'", nativeQuery=true)
	//public List<Trainings> getAllResponse(@Param("tid") long  tid);
	public List<Trainings> getAllResponse();

}
