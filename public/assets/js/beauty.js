// home page product search
$("#productBtn").on("click", function(event) {
  event.preventDefault();
  $("#results").html("");

  var product = $("#productSearch").val();

  location.assign("/api/product/" + product);

  $("#productSearch").val("");
  $("#brandSearch").val("");
});

$("#ingredientBtn").on("click", function(event) {
  event.preventDefault();
  $("#results").html("");

  var ingredient = $("#ingredientSearch").val();

  $.get("/api/ingredient/" + ingredient, function(data) {
    location.assign("/api/ingredientrate/" + ingredient);
  });

  $("#productSearch").val("");
  $("#ingredientSearch").val("");
});
