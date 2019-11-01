
$(document).ready(function(){

	$("#update_form").submit(function(e){
          
          var updateForm = $("#update_form");

          var fname = $("#update_fname").val();
          var lname = $("#update_lname").val();
          var teamName = $("#update_teamName").val();
          var incident = $("#update_incident").val();
          var timeSpent = $("#update_timeSpent").val();
//I will use teamName and incident for update
               var updateData = {
               	    title : teamName,
               	    body : incident,
               }

                  $.ajax({
                  	       type: updateForm.attr("method"),
                  	       url:"https://jsonplaceholder.typicode.com/posts/"+fname,
                  	       contentType: "application/json",
                  	       data: JSON.stringify(updateData),
                  	       dataType: "json",
                  	       headers:{
                  	       	Accept: "application/json",
                  	       },
                  	       success:(response)=>{
                  	       	updateForm.trigger("reset");
                          	$.notify({message : "Incident updated successfully"},
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
                  	       error:(response)=>{
                           alert("something happened with update. Contact support");
                  	       },
                  	  complete: function(){ }
                  });
 e.preventDefault();
	});
});