
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

//VALIDAR LOGIN
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#signup");
	const recuperarPass = document.querySelector("#recuperar");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

	document.querySelector("#lostPass").addEventListener("click", e => {
        e.preventDefault();
        recuperarPass.classList.remove("form-hidden");
        loginForm.classList.add("form-hidden");
    });

	document.querySelector("#backLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        recuperarPass.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        
    });

    $('#signupRut').rut({
        fn_error : function(input){
            toastConfig();
                Command: toastr["warning"]('El rut: ' + input.val() + ' es incorrecto', "Atención");      
        },
        placeholder: false,
        blur:false
    });

    $("body").on("blur", "#signupEmail",function validarEmail()
    {
        var email = document.getElementById("signupEmail").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(pattern))
        {
            return true;
        }else{
            toastConfig();
                Command: toastr["warning"]('Email no valido', "Atención");
        }
    });

});

$("body").on("click", "#createAcc", function (e) {
    e.preventDefault();

    //OBTENEMOS DATOS DEL FORMULARIO
    let form = $("#signup").serializeArray();

    //IMPRIME DEL NAVEGADOR 
    console.log(form);

    let error = 0;

    //VALIDACION
    $(form).each(function (i, item) {
        if (item.value == '' || item.value == null || item.value == undefined || item.value == 0 )
        {
            error = 1;
            $("#" + item.name).addClass('bg-danger');

        }
    });

    if (error == 1) {
        toastConfig();
        Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
    }
    else {

        localStorage.setItem("createAcc", JSON.stringify(form));

        //CONFIRMACION
        let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');

        if (confirmar == true) {
            //LLAMADA POR AJAX A API
            $.ajax({
                data: { data: JSON.stringify(form) },
                url: "api/login.php?a=1",
                type: 'POST',
                success: function (data) {
                    if (data != null || data != '') {
                        toastConfig();
                        Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
                        //LIMPIAR FORMULARIO
                        $(".form-control").removeClass('bg-success');
                        $(".form-control").removeClass('bg-danger');  
                    }
                    else {
                        toastConfig();
                        Command: toastr["danger"]("Error de conexión", "Error");
                    }
                }
            });
        
        }
        else {
            return false;
        }
    }
});
//end VALIDAR LOGIN
