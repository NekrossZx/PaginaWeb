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

//                                                                                 FILTRO

  //COMPLETA SERVICIO
  let rango = null;
  $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/deptos.php?a=3",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        rango = JSON.parse(data);
      }
  }); 

  $(rango).each(function (i, item) {
    $("#rango_filtro").append(`<div class="wrapper-filter">
      <div class="price-input ">
        <div class="field">
          <span>Min</span>
          <input type="number" class="input-min" value="`+item.MIN+`">
        </div>
        <div class="separator">-</div>
        <div class="field">
          <span>Max</span>
          <input type="number" class="input-max" value="`+item.MAX+`">
        </div>
      </div>
      <div class="slider">
        <div class="progress" style="left:0%; right:0%;"></div>
      </div>
      <div class="range-input">
        <input type="range" class="range-min" min="`+item.MIN+`" max="`+item.MAX+`" value="`+item.MIN+`" step="10">
        <input type="range" class="range-max" min="`+item.MIN+`" max="`+item.MAX+`" value="`+item.MAX+`" step="10">
      </div>
    </div>`)
  });
  
    //MOSTRAR VALOR EN RANGE
    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 100;

    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap;
                }else{
                    rangeInput[1].value = minVal + priceGap;
                }
            }else{
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

      

    //COMPLETA SERVICIO
    let region = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=2",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
          region = JSON.parse(data);
        }
    }); 

    $(region).each(function (i, item) {
        $("#filtro_region").append('<option value="'+item.NOMBRE+'">'+item.NOMBRE+'</option>')
    });

//                                                                         DEPARTAMENTOS
  //COMPLETA DEPARTAMENTOS
    let deptos = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/deptos.php?a=1",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
          deptos = JSON.parse(data);
        }
    }); 

    $(deptos).each(function (i, item) {
        $("#vista_depts").append(`
        <div class="wrapper" id="dep`+item.ID_DEPARTAMENTO+`">
        <h1 style="color:white; id="nombre">`+item.NOMBRE_REGION+`</h1>
        <img class="image i1" src="images/deptos/`+item.IMAGEN+`" alt="img">
        <div class="details">
          <h1>Codigo:`+item.ID_DEPARTAMENTO+`<em id="codigo"></em></h1>
          <h2 id="`+item.NOMBRE+`">`+item.NOMBRE+`</h2>
          <h1><em>Incluye</em></h1>
          <h1><em>AQUI VAN LOS SERVICIOS</em></h1>
        </div>
        <p style="color:white;">ARRIENDO DIARIO</p>
        <h1>$`+item.ARRIENDO_DIARIO+`</h1>
        <a id="btn_id" type="button" href="dep.html?id=`+item.ID_DEPARTAMENTO+`" class="btn btn-custom-light">Detalles</a>
      </div>
      `);
    });

});