
$( document ).ready(function() {

    $(".eat-burger").on("click", function(event) {
      var id = $(this).attr("data-id");

      var data = {
        devoured: true
      }

      $.ajax("/api/update/" + id, {
        type: "PUT",
        data: data
      }).then(
        function() {
          location.reload();
        }
      );
    });

    // $("#submit").on("click", function(event) {
    //   event.preventDefault();
    //   alert("hello")
    //   var input = $("#added-burger").val().trim();
    //   var name = {
    //     name : input
    //   }

    //   var url = "/api/add";
    //   $.ajax({ url: url, 
    //     type:"POST",
    //     data: name
    //   }).then(
    //     function(){
    //       location.reload();
    //     })
    // })


    // $(".delete-burger").on("click", function(event) {
    //   console.log("-------------")
    //   var name = $(this).attr("data-name");
    //   console.log("this is name: "+name);

    //   var url = "/burger/delete";
    //   $.ajax({ url: url, 
    //     type:"POST",
    //     data: name
    //   }).then(
    //     function(){
    //       location.reload();
    //     })
    // })

  });
  