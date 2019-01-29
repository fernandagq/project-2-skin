// home page product search
$("#productBtn").on("click", function(event) {
    event.preventDefault();
    $("#results").html("");

    var product = $("#productSearch").val().trim();
    var brand = $("#brandSearch").val().trim();
    var summary = "As a 100% vegan and cruelty-free brand, Kat Von D Beauty is committed to creating hyper-performance beauty products that are completely free of animal-derived ingredients, and never tested on animals. That means you can conceal, contour and create with confidence knowing your products aren’t harming animals.We never use common cosmetic ingredients such as beeswax and carmine (a red dye made from beetles), and instead opt for kinder alternatives, without ever compromising on color. Now you can make compassionate choices without sacrificing bold, beautiful pigment and everlasting wear!";
    var imgSrc = "https://www.sephora.com/productimages/sku/s1848522-main-hero-300.jpg";

    // create the search object
    var beautySearch = {
        product: product,
        brand: brand,
        summary: summary,
        imgSrc: imgSrc
    };

    beautyResult(beautySearch);

    $.get("/api/beautySearch", beautySearch)
    .then(function(data) {
        console.log(data);
        // run function for displaying info
    });

    // build results

    // empty inputs
    $("#productSearch").val("");
    $("#brandSearch").val("");
});

// displaying info
function beautyResult(e) {
    console.log(e);
    resultBuild(e);

    // create info based on data returned
}

function resultBuild(e) {

    // build results container
    var resultContainer = $("<section>");
    resultContainer.html("");
    

    // build row to contain the columns
    var resultRow = $("<div>").attr("class", "row");
    resultRow.html(
        `
            <div class="col-sm-12 col-md-5"><img src="${e.imgSrc}"></div>

            <div class="col-sm-12 col-md-7">
                <h1>${e.product}</h1>
                <h2>${e.brand}</h2>
                <p>${e.summary}</p>
            </div>
        `
    );

    var clearButton = $("<button>");
    clearButton.text("Clear result").attr("id", "clearBtn");
    $(clearButton).on("click", function() {
        resultContainer.html("");
    });

    // img in column (background-img) for size adjustment?

    // column with text
        // product name and brand
        // product category

        // ingredients

        // warnings/testing

    // appending stuff
    $(resultContainer).append(resultRow);
    $(resultRow).append(clearButton);
    $("#results").append(resultContainer);
}
