package com.pooling.demo.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.pooling.demo.entity.Poll;
import com.pooling.demo.repository.PollRepo;
import com.pooling.demo.response.ResponseStructure;
import com.pooling.demo.service.PollService;
@Service
public class PollServiceImpl implements PollService{
    @Autowired
	private PollRepo pollRepo;
    
   
	@Override
	public ResponseStructure<Poll> createPoll(String title, String description,List<String> options) {
       if( title==null ||title.isBlank()) {
            throw new RuntimeException("Title can't be empty");    	   
       }
       Poll poll = new Poll();
       poll.setTitle(title);
       poll.setDescription(description);
       poll.setOptions(options);
       
       Poll createdPoll=pollRepo.save(poll);
       
       
		return new ResponseStructure<>(createdPoll,HttpStatus.OK.value(),"Poll created");
	}

	@Override
	public ResponseStructure<Poll> updatePoll(Long pollId, String title, String description) {
		Poll poll=pollRepo.findById(pollId).orElseThrow(()-> new RuntimeException("Poll not found"));
		if(title!=null) {
			poll.setTitle(title);
		}
		
	    poll.setDescription(description);
		
		Poll updatedPoll= pollRepo.save(poll);
		
		return new ResponseStructure<Poll>(updatedPoll,HttpStatus.OK.value(),"Poll updated") ;
	}

	@Override
	public ResponseStructure<Poll> deletePoll(Long pollId) {
		Poll poll = pollRepo.findById(pollId).orElseThrow(()->new RuntimeException("poll not found"));
		pollRepo.delete(poll);
		return new ResponseStructure<Poll>(poll, HttpStatus.OK.value(),"poll deleted");
	}

	@Override
	public ResponseStructure<Poll> getPollById(Long pollId) {
	   Poll poll= pollRepo.findById(pollId).orElseThrow(()->new RuntimeException("poll not found"));
	   
	   
		return new ResponseStructure<Poll>(poll, HttpStatus.FOUND.value(), "Poll found");
	}

	@Override
	public ResponseStructure<List<Poll>> getAllPolls() {
		List polls= pollRepo.findAll();
		return new ResponseStructure<List<Poll>>(polls,HttpStatus.FOUND.value(),"polls fetched");
	}

}
