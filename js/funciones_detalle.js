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

    $(document).ready(function () {
        let confirmar_depto = sessionStorage.getItem("detalle");
        if (confirmar_depto == undefined || confirmar_depto == '' || confirmar_depto == null) {
            console.log(confirmar_depto);
            window.location.replace('departamentos.php');
        }
    });

    let detalle_imagen = sessionStorage.getItem('detalle');
    //COMPLETA DEPARTAMENTOS
    let carrusel = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=4",
        'data': { data: detalle_imagen },
        'success': function (data) {
            carrusel = JSON.parse(data);
        }
    });

    $(carrusel).each(function (i, item) {
        if (i === 0) {
            $("#slide").append(`<div class="mySlides" active><img class="image" src="images/deptos/` + item.URL_IMAGEN + `.jpg"></div>`);
        } else {
            $("#slide").append(`<div class="mySlides" style="display:none;"><img class="image" src="images/deptos/` + item.URL_IMAGEN + `.jpg"></div>`);
        }
    });

    let contador_foto = 1;
    let thumbnails = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=4",
        'data': { data: detalle_imagen },
        'success': function (data) {
            thumbnails = JSON.parse(data);
        }
    });

    $(thumbnails).each(function (i, item) {
        $("#thumbnails").append(`
        <!-- Thumbnail images -->
                <div class="column">
                    <img class="demo cursor thumb" src="images/deptos/`+ item.URL_IMAGEN + `.jpg" onclick="currentSlide(` + contador_foto + `)" alt="` + item.DESCRIPCION + `">
                </div>`
        )
        contador_foto++;
    });

    //COMPLETA DETALLES

    let detalles = null;
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        url: "api/deptos.php?a=5",
        data: { data: detalle_imagen },
        success: function (data) {
            detalles = JSON.parse(data);
        }
    });

    $(detalles).each(function (i, item) {
        $("#detalles").append(`
        <div class="row text_align_center">
            <h3 class="col-md-4">`+ item.NOMBRE_REGION + `</h3> 
            <h2 class="col-md-4">`+ item.NOMBRE + `</h2>
            <h3 class="col-md-4" id="codigo" data-value="`+ item.ID_DEPARTAMENTO + `">Código: ` + item.ID_DEPARTAMENTO + `</h3>
        </div>     
        <textarea readonly>`+ item.DESCRIPCION + `</textarea>
        <table class="table">
            <tr>
                <th>Metros Cuadrados</th>
                <th>Habitaciones</th>
                <th>Baños</th>
            </tr>
            <tr>
                <td><em>`+ item.METROS_CUADRADOS + ` m²</em></td>
                <td><em>`+ item.HABITACIONES + `</em></td>
                <td><em>`+ item.BANOS + `</em></td>
            </tr>
        </table>
        <h3>Servicios Incluidos</h3>
        <div id="servicios"></div><br>
        <p>Valor por día</p>
        <h1>$`+ item.ARRIENDO_DIARIO + `</h1>
        <a href="reserva.php" type="button" id="reservar" class="btn btn-custom-light">RESERVAR</a>`)
    });

    let asociados = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=6",
        'data': { data: detalle_imagen },
        'success': function (data) {
            asociados = JSON.parse(data);
        }
    });

    if (asociados === null || asociados == 0 || asociados == undefined || asociados == '') {
        $("#servicios").append('<p>DEPARTAMENTO SIN SERVICIO ASOCIADO</p>');
    } else {
        $(asociados).each(function (i, item) {
            $("#servicios").append(`<a type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="` + item.DESCRIPCION + `">&#10095; ` + item.NOMBRE_SERVICIO + `</a>`)
        });
    }

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
    if (n > slides.length) {
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
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

