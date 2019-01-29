$(document).ready(function () {
    $.get('/api/user_data').then(function(data){
        $('.member-name').text(data.email);
    });
});
//create more content here to ask the user what they would like to do: 

//update their information
//update the prodcuts on their skincare routine
//logout
//display their saved content 
// display their