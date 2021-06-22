// funcion para agregar color al menu al dar click en el boton menu
$('#main-menu-button').on('click', function (e){
    $('.sideMenu').addClass('open');
    e.preventDefault();
})

$('#closeMenu').on('click', function (e){
    $('.sideMenu').removeClass('open');
    e.preventDefault();
})

$('#languaje-link').on('click', function (e){
    $('.languaje-section').toggleClass('langOpen');
    e.preventDefault();
})