$(document).ready(function(){
    $('form.sign-up').on('submit', function(event){
        event.preventDefault();
        var userData = {
            email:$("#exampleInputEmail1").val().trim(),
            password:$("#exampleInputPassword1").val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        signUpUser(userData.email, userData.password);
        $("#exampleInputEmail1").val('');
        $("#exampleInputPassword1").val(''); 
    });

    function signUpUser(email, password) {
        $.post('/api/signup', {
            email: email,
            password: password
        }).then(function(data){
            window.location.replace(data);
        }).catch({
            //handle error
        });
    }
})