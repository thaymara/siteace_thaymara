import { Meteor } from 'meteor/meteor';


Meteor.startup(function () {
    // code to run on server at startup
    if (!Websites.findOne()){
    	  Websites.insert({
    		title:"Goldsmiths Computing Department", 
    		url:"http://www.gold.ac.uk/computing/", 
    		description:"This is where this course was developed.", 
		upRating: 0,
		downRating: 0,
    		createdOn:new Date()
    	});
    	 Websites.insert({
    		title:"University of London", 
    		url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
    		description:"University of London International Programme.",
		upRating: 0,
		downRating: 0, 
    		createdOn:new Date()
    	});
    	 Websites.insert({
    		title:"Coursera", 
    		url:"http://www.coursera.org", 
    		description:"Universal access to the world’s best education.", 
		upRating: 0,
		downRating: 0,
    		createdOn:new Date()
    	});
    	Websites.insert({
    		title:"Google", 
    		url:"http://www.google.com", 
    		description:"Popular search engine.",
		upRating: 0,
		downRating: 0,
    		createdOn:new Date()
    	});
    }
  });

Meteor.methods({
  'remoteGet' : function(url){
	this.unblock();
		//var result = HTTP.get(url);
	return Meteor.http.call("GET", url);
	
  }
});
