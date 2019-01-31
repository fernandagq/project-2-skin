// home page product search
$("#productBtn").on("click", function(event) {
  event.preventDefault();
  $("#results").html("");

  var product = $("#productSearch").val();

  $.get("/api/product/" + product, function(res) {
    // location.assign("/api/product/" + product);
    // location.reload();

    document.write(res);

    var clearButton = $("<button>");
    clearButton.text("Clear result").attr("id", "clearBtn");
      $(clearButton).on("click", function() {
        location.reload();
      });

    $(".clear").append(clearButton);
  });

  $("#productSearch").val("");
  
});

// product rating search

$("#ingredientBtn").on("click", function(event) {
  event.preventDefault();
  $("#results").html("");

  var ingredient = $("#ingredientSearch").val();

  $.get("/api/ingredient/" + ingredient, function(data) {
    location.assign("/api/ingredientrate/" + ingredient);
  });

  $("#productSearch").val("");
  $("#ingredientSearch").val("");

  var clearButton = $("<button>");
  clearButton.text("Clear result").attr("id", "clearBtn");
  $(clearButton).on("click", function() {
      $("#results").html("");
  });
  $("#results").append(clearButton);

});

// $("#ingredientBtn").on("click", function(event) {
//   event.preventDefault();
//   $("#results").html("");

//   var ingredient = $("#ingredientSearch").val();
//   console.log(ingredient);



//   $.get("/api/ingredientrate/" + ingredient, function(data) {
//       console.log(data);
//   });

//   $("#productSearch").val("");
//   $("#ingredientSearch").val("");
// });
