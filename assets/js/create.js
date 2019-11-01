$(document).ready(function(){

//submit form
	$("#incident_form").submit(function(e){

       var incidentForm = $("#incident_form");

       //collect variables
      var fname = $("#fname").val();
      var lname = $("#lname").val();
      var teamName = $("#teamName").val();
      var incident = $("#incident").val();
      var timeSpent  = $("#timeSpent").val();
//i will use teamName for :title and incident for :body since i am using
//https://jsonplaceholder.typicode.com/
      
        var incidentData = {
        	title: teamName,
        	body:incident,
        }
                     $.ajax({
                     	    type:incidentForm.attr("method"),
                     	    url:"https://jsonplaceholder.typicode.com/posts",
                     	    contentType: "application/json",
                     	    data: JSON.stringify(incidentData),
                     	    dateType:"json",
                     	    headers:{
                     	    	Accept: "application/json",
                     	    },
                     	    success: function(response){
                            console.log(response);
                     	      incidentForm.trigger("reset");
                     	      //get response if incident created.
                               	$.notify({message : "Incident created successfully"},
	                                   {
                                       element: 'body',
                                        type: 'success',
                                        allow_dismiss: true,
                                        placements: {
     	                                  from: 'top',
     	                                  align: 'right',
     	                                  delay:5000,
     	                                  timer: 1000,
     	                                  animate:{
     	                                  	enter: 'animatedfadeInDown',
                                             exit: 'animatedfadeOutUp',
     	                                   },
                                       },
                                  });
                     	    },
                     	    error: (response)=>{
                     	    	alert("something happened. Contact support");
                     	    },
                     	    complete:function(){
                     	    }
                     });
e.preventDefault();
	});
});