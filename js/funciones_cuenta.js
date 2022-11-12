$(document).ready(function () {    

    document.addEventListener("DOMContentLoaded", () => {
        const perfil = document.querySelector("#form_perfil");
        const reservas = document.querySelector("#mis_reservas");

        document.querySelector("#reservas").addEventListener("click", e => {
            e.preventDefault();
            perfil.classList.add("form-hidden");
            reservas.classList.remove("form-hidden");
            reservas.classList.add("active")
        });

        document.querySelector("#perfil").addEventListener("click", e => {
            e.preventDefault();
            reservas.classList.add("form-hidden");
            perfil.classList.remove("form-hidden");
            perfil.classList.add("active");
        });
    });
    //end VALIDAR LOGIN

    //TIMEOUT PARA QUE DESPUES DE X MILISEGUNDOS SE EJECUTE EL CODIGO
    setTimeout(function () {
        $("#dt_reserva").DataTable({
          "ajax": {
            "url": "api/cuenta.php?a=1",
            "type": "POST",
            "dataSrc": ""
          },
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'selected',
              text: 'Editar',
              action: function ( e, dt, button, config ) {
                $("#").modal('show');
              }
            },
            {
              extend: 'selected',
              text: 'Eliminar',
              action: function ( e, dt, button, config ) {
                $("#").modal('show');
              }
            },
          ],
          aaSorting: [0, 'desc'],
            bDestroy: true,
            processing: false,
            serverSide: false,
            pageLength: 7,
            lengthChange: true,
            paging: true,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: true,
            select: 'single',
          language: {
            search: '<i class="fa fa-search"></i>',
            searchPlaceholder: "Buscar...",
          },
            columns: [
              {
                className: "text-nowrap dt_numero_reserva",
                  render: function (data, type, dt) {
                      return validarVacio(dt.numero_reserva);
                  }
              },
          ],
          drawCallback: function (settings) { 
          },
        });
        }, 1000);

    function validarVacio(txt)
    {
        let valor = txt;
        if (txt == null || txt == undefined || txt == '')
        {
            valor = 'Sin Información';
        }
  
        return valor;  
    }

});