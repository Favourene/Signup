$(document).ready(function(){
    var $a = $('.a'),
    $home = $('.home'),
    $signup = $('.signup');
   

    $a.click(function(){
        $signup.fadeIn();
        $home.fadeOut();
    })
   
});