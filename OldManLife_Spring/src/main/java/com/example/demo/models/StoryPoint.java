package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="story_points")
public class StoryPoint {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int id;
	
	public String tag;
	public String plotText;
	public String option1Text;
	public String option2Text;
	public String gifURL;
	
	public StoryPoint() { }
	
	public StoryPoint(int id, String key, String plotText, String option1Text, String option2Text, String gifURL) {
		super();
		this.id = id;
		this.tag = key;
		this.plotText = plotText;
		this.option1Text = option1Text;
		this.option2Text = option2Text;
		this.gifURL = gifURL;
	}
	
	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public String getGifURL() {
		return gifURL;
	}

	public void setGifURL(String gifURL) {
		this.gifURL = gifURL;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPlotText() {
		return plotText;
	}
	public void setPlotText(String plotText) {
		this.plotText = plotText;
	}
	public String getOption1Text() {
		return option1Text;
	}
	public void setOption1Text(String option1Text) {
		this.option1Text = option1Text;
	}
	public String getOption2Text() {
		return option2Text;
	}
	public void setOption2Text(String option2Text) {
		this.option2Text = option2Text;
	}
	
	
}
