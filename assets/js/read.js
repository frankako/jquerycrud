
$(document).ready(function(){
//on document load, we make our call.
	$.ajax({
            type: "GET",
            url:"https://jsonplaceholder.typicode.com/posts",
            dataType: "json",
            headers: {
               Accept: "application/json",
            },
            success: (response)=>{
            var response = JSON.parse(JSON.stringify(response));

            var number = 5;
            var x =0;
            var title = 1;
          
  //jQuery.isEmptyObject(response[myObj])? alert("No result found for read posts") : true;
       while(x<number){
          for(x=0; x<number; x++){
              	$("#displayResult").append(`
              <div id="postId${response[x].id}">
              		<h4><b>${title++}</b> ${response[x].title}</h4>
					   <p>${response[x].body}</p>
            <a class='text-decoration-none text-warning font-weight-bold' href='javascript:void(0)' id='updatepost${response[x].id}' onclick='postUpdate("${response[x].id}", "${response[x].userId}")'>Update</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a class='text-decoration-none text-danger font-weight-bold' href='javascript:void(0)' id='deletepost${response[x].id}' onclick='postDelete("${response[x].id}", "${response[x].userId}")'>Delete</a>
			       <hr />
              </div>	`);
              }//end for loop
          }//end while loop
          x++;
        },
        error:(response)=>{
          alert('An error occured, Contact support!');
        },
       complete:function(){ }
	});
});