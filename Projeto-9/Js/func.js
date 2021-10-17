$('nav.desktop a').hover(function(){
    $('nav li').removeClass('troca');
    $(this).parent().addClass('troca');
});
$('nav.mobile h3').click(function(){
    $('ul.nav-desktop').slideToggle();
})