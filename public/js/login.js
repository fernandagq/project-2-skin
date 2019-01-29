$(document).ready(function (){

    $('form.login').on('submit', function(event){
        event.preventDefault();
        var userData = {
            email: $('#exampleInputEmail1').val().trim(),
            password: $('#exampleInputPassword1').val().trim()
        };
        if(!userData.email || !userData.password){
            return;
        }

        loginUser(userData.email, userData.password);
        $('#exampleInputEmail1').val('');
        $('#exampleInputPassword1').val('');
    });

    function loginUser(email, password){
        $.post('api/login', {
            email: email,
            password:password
        }).then(function(data){
            window.location.replace(data);
        }).catch(function(err){
            console.log(err);
        });
    }
});