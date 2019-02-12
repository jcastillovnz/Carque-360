function getUrl()
{
    // capturamos la url
    var loc = window.location.href;
    

    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {// cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
      return get;
    }
}






$( window ).on( "load", function() {
// Cogemos los valores pasados por get
    var values= getUrl();
    if(values)
    {
//recogemos los valores que nos envia la URL en variables para trabajar con ellas


level1 = values['level1'];
level2 = values['level2'];
document.getElementById("plan-technique").style.backgroundImage = "url("+level1+"2D.png)";
document.getElementById("plan-axo").style.backgroundImage = "url("+level1+"3D.png)";
                             
 if (level2==0){        
    
 document.getElementById("two-tech").style.display = "none";
document.getElementById("two").style.display = "none";


 }
 else
 {
document.getElementById("two-tech").style.display = "block";
document.getElementById("two").style.display = "block";
 }









 }else{

window.history.back();

    }
  document.getElementById("loader").style.display = "none";

});









$( document ).ready(function() {
  
           $('.side-bar').on('click', function(){

            $('.side-bar.side-bar-active > .content.content-active').removeClass('content-active');
            $('.side-bar.side-bar-active').removeClass('side-bar-active');
            $('.side-bar-content.hidden').removeClass('hidden');
            $(this).addClass('side-bar-active');
            $(this).children( ".side-bar-content" ).addClass('hidden');
            $(this).children( ".content" ).addClass('content-active');
        });


        $('#one').on('click', function(){
            $('.level-axo.active').removeClass('active');
            $(this).addClass('active');
            document.getElementById("plan-axo").style.backgroundImage = "url("+level1 +"3D.png)";
        });

        $('#two').on('click', function(){

            $('.level-axo.active').removeClass('active');
            $(this).addClass('active');
            document.getElementById("plan-axo").style.backgroundImage = "url("+level2 +"3D.png)";
        });

        $('#one-tech').on('click', function(){

 
            $('.level-tech.active').removeClass('active');
            $(this).addClass('active');
         document.getElementById("plan-technique").style.backgroundImage = "url("+level1 +"2D.png)";

        });

        $('#two-tech').on('click', function(){

            $('.level-tech.active').removeClass('active');
            $(this).addClass('active');
          document.getElementById("plan-technique").style.backgroundImage = "url("+level2 +"2D.png)";
        });


});