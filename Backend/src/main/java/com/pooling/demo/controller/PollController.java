package com.pooling.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pooling.demo.entity.Poll;
import com.pooling.demo.response.ResponseStructure;
import com.pooling.demo.service.PollService;

@RestController
@RequestMapping("/api/poll")
public class PollController {
	@Autowired
	private PollService pollService;
	@PostMapping("/create")
	public ResponseStructure<Poll> createPoll(@RequestBody Poll poll){
		
		return pollService.createPoll(poll.getTitle(), poll.getDescription(),poll.getOptions());
	}
	
	@PutMapping("/update/{pollId}")
	public ResponseStructure<Poll> updatePoll(@PathVariable Long pollId,@RequestBody Poll poll){
		return pollService.updatePoll(pollId, poll.getTitle(), poll.getDescription());
	}
	
	@DeleteMapping("/delete/{pollId}")
	public ResponseStructure<Poll> deletePoll(@PathVariable Long pollId){
		return pollService.deletePoll(pollId);
	}
	
	@GetMapping("/find/{pollId}")
	public ResponseStructure<Poll> findPollById(@PathVariable Long pollId){
		return pollService.getPollById(pollId);
	}
	
	@GetMapping("/all")
	public ResponseStructure<List<Poll>> getAllPolls(){
		return pollService.getAllPolls();
	}
	@GetMapping("/test")
	public String test() {
	    return "WORKING";
	}
}
