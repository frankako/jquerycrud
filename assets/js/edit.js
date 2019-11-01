$(document).ready(function(){
	$("#updatepost").click(function(e){	
		postUpdate(param1, param2);
	});
});

function postUpdate(param1, param2){    
     var id = param1;
//base on request type, i can pass user id but not in this case. multiple where clauses
     var userId = param2;

     $.ajax({
     	     type: "GET",
     	     url: "https://jsonplaceholder.typicode.com/posts?id="+id,
     	     dataType: "json",
     	     headers:{
     	     	Accept: "application/jason",
     	     },
     	     success:(response)=>{
     	     var response = JSON.parse(JSON.stringify(response));
            $("#incidentForm").slideUp();
            $("#postSection").hide();
              $("#forUpdate").append(`
			<div class="card border-0" id="mtop-30">
				 	 <div class="card-header text-center">
				 	 	<h4>Update Incident Form</h4>
				 	 </div>
				 	 <div class="card-body">
				 	 	<form method="PATCH" id="update_form" action="">
					<div class="form-group">
						<label for="update_fname"><b>First Name</b></label>
						<input type="text" id="update_fname" name="update_fname" value="${response[0].id}" placeholder="Enter First Name" class="form-control">
					</div>
					<div class="form-group">
						<label for="update_lname"><b>Last Name</b></label>
						<input type="text" id="update_lname" name="update_lname" value="${response[0].userId}" placeholder="Enter Last Name" class="form-control">
					</div>
					<div class="form-group">
						<label for="update_teamName"><b>Team Name /Title</b></label>
						<input type="text" id="update_teamName" name="update_teamName" value="${response[0].title}" placeholder="Enter Team Name" class="form-control">
					</div>
					<div class="form-group">
						<label for="update_incident"><b>Incident /Body</b></label>
						<textarea id="update_incident" name="update_incident" class="form-control">${response[0].body}</textarea>
					</div>
					<div class="form-group">
						<label for="update_timeSpent"><b>Time Spent</b> <small>in Mins</small></label>
						<input type="text" id="update_timeSpent" name="update_timeSpent" value="120" placeholder="Enter Time Spent" class="form-control">
					</div>
					<div class="form-group">
						<button type="submit" class = "btn btn-success" id="updateButton">Update Incident</button>
					</div>
				</form>
				 	 </div>
				 </div>
	     	`);
       },
       error:(response)=>{
       	alert("Error occured during update. Contact support!")
       }

     });
}