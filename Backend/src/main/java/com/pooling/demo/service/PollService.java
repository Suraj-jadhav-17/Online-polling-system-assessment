package com.pooling.demo.service;

import java.util.List;

import com.pooling.demo.entity.Poll;
import com.pooling.demo.response.ResponseStructure;

public interface PollService {
    
	public ResponseStructure<Poll> createPoll(String title, String description,List<String> options);
	public ResponseStructure<Poll> updatePoll(Long pollId,String title , String description);
	public ResponseStructure<Poll> deletePoll(Long pollId);
	public ResponseStructure<Poll> getPollById(Long pollId);
	public ResponseStructure<List<Poll>>getAllPolls();
	
	
}
