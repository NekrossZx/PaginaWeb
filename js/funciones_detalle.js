$(document).ready(function () {
    //                                                                                       GENERAL
    //ALERTA TOAST
    function toastConfig() {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-full-width",
      preventDuplicates: false,
      onclick: null,
      showDuration: "2000",
      hideDuration: "2000",
      timeOut: "2000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      preventDuplicates: true,        
      };
      return toastr.options;
    }

    //COMPLETA DEPARTAMENTOS
    let carrusel = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=4",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
          carrusel = JSON.parse(data);
        }
    }); 

    let contador_foto = 1;
    

    $(carrusel).each(function (i, item) {
        if(i===0){
            $("#slide").append(`<div class="mySlides" active><img class="image" src="images/deptos/`+item.URL_IMAGEN+`"></div>`);
        }else{
            $("#slide").append(`<div class="mySlides" style="display:none;"><img class="image" src="images/deptos/`+item.URL_IMAGEN+`"></div>`);
        }
    });

    let thumbnails = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=4",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            thumbnails = JSON.parse(data);
        }
    }); 

    $(thumbnails).each(function (i, item) {
        $("#thumbnails").append(`
        <!-- Thumbnail images -->
                <div class="column">
                    <img class="demo cursor thumb" src="images/deptos/`+item.URL_IMAGEN+`" onclick="currentSlide(`+contador_foto+`)" alt="`+item.DESCRIPCION+`">
                </div>`
        )
        contador_foto++;
    });

    //COMPLETA DETALLES
    let detalles = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=5",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            detalles = JSON.parse(data);
        }
    }); 
        
    $(detalles).each(function (i, item) {
        $("#detalles").append(`  
        <h2>`+item.NOMBRE+`</h2>
        <h3>Código: `+item.ID_DEPARTAMENTO+`</h3>      
        <h3>`+item.NOMBRE_REGION+`</h3>
        <p>`+item.DESCRIPCION+`</p>
        <h1>Metros cuadrados: <em>`+item.METROS_CUADRADOS+`m²</em></h1>
        <h1>Habitaciones: <em>`+item.HABITACIONES+`</em></h1>
        <h1>Baños: <em>`+item.BANOS+`</em></h1>
        <h1><em>Servicios incluidos</em></h1>
        <div>aqui van los Servicios</div>
        <p>Valor por día</p>
        <h1>$`+item.ARRIENDO_DIARIO+`</h1>
        <a href="reserva.php?id=`+item.ID_DEPARTAMENTO+`" type="button" id="reservar" class="btn btn-custom-light">RESERVAR</a>
        <button type="button" class="btn btn-custom btn-block" onclick="history.back()">Volver</button>`)
    });
    
    const queryString = window.location.search;
    console.log(queryString);
});

//FUNCIONES CARRUSEL

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

