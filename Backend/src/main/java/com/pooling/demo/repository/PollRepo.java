package com.pooling.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pooling.demo.entity.Poll;

public interface PollRepo extends JpaRepository<Poll, Long>{

}
