package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.*;

public interface StoryRepository extends JpaRepository<StoryPoint, String>{
	
	StoryPoint findByTag(String tag);
}
