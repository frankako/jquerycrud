
class DeletePost{
	constructor(){
     this.events();
	}

	events(){
		$("#deletepost").on("click", function(){
			postDelete(param1, param2);
		});
	}
}
//instnace of class
var deletepost = new DeletePost;


//mounted function
function postDelete(param1, param2){
	 
	var ID = param1;
	var userId = param2; 

	$.when(
            $.ajax({
            	type: "DELETE",
            	url:"https://jsonplaceholder.typicode.com/posts/"+ID,
            	contentType:"application/json",
            	dateType: "json",
            }),
           $.getJSON("https://jsonplaceholder.typicode.com/posts/"+ID)

		).then((response1, response2)=>{
        
        if(response1[1] == "success"){  // && jQuery.isEmptyObject(response2)    
    //slide up post.
            $("#postId"+param1).slideUp();
           $.notify({message : "Post deleted successfully"},
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
       })
//exception handler
  }else{
      alert("Post could not be deleted. Contact support!");
 }
  });
}