// home page product search
$("#productBtn").on("click", function(event) {
  event.preventDefault();
  $("#results").html("");

  var product = $("#productSearch").val();

  $.get("/api/product/" + product, function(data) {
    // location.assign("/api/product/" + product);
    document.write(data);

    var clearButton = $("<button>");
    clearButton.text("Clear result").attr("id", "clearBtn");
    $(clearButton).on("click", function() {
        $("#results").html("");
    });
    $("#results").append(clearButton);
  });

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

  var clearButton = $("<button>");
  clearButton.text("Clear result").attr("id", "clearBtn");
  $(clearButton).on("click", function() {
      $("#results").html("");
  });
  $("#results").append(clearButton);

});



// // displaying info
// function beautyResult(e) {
//     console.log(e);
//     resultBuild(e);

//     // create info based on data returned
// }

// function resultBuild(e) {

//     // build results container
//     var resultContainer = $("<section>");
//     resultContainer.html("");

//     // build row to contain the columns
//     var resultRow = $("<div>").attr("class", "row");
//     resultRow.html(
//         `
//             <div class="col-sm-12 col-md-5"><img src="${e.imgSrc}"></div>

//             <div class="col-sm-12 col-md-7">
//                 <h1>${e.product}</h1>
//                 <h2>${e.brand}</h2>
//                 <p>${e.summary}</p>
//             </div>
//         `
//     );

    

//     // img in column (background-img) for size adjustment?

//     // column with text
//         // product name and brand
//         // product category

//         // ingredients

//         // warnings/testing

//     // appending stuff
//     $(resultContainer).append(resultRow);
//     $(resultRow).append(clearButton);
//     $("#results").append(resultContainer);
// }
