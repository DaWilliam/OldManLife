package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.StoryPoint;
import com.example.demo.repositories.StoryRepository;

@CrossOrigin(origins = "http://localhost:4200")	//	Should be the location that the angular server is hosted on
@RestController    //	This is a Web Service
@RequestMapping("/story")
public class StoryPointController {

	@Autowired
	StoryRepository storyRepository;
	
	//	Gets the the next StoryPoint given the decision
	@GetMapping("/{decision}")
	public ResponseEntity<StoryPoint> GetStoryPoint(@PathVariable String decision)
	{
		return new ResponseEntity<StoryPoint>(new StoryPoint(), HttpStatus.OK);
	}
}
