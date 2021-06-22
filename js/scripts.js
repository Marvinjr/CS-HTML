// funcion para agregar color al menu al dar click en el boton menu
$('#main-menu-button').on('click', function (e){
    $('#main-nav').toggleClass('bg-primary');
    e.preventDefault();
})