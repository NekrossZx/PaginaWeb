
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

    $("body").on("blur", "#email", function ()
    {
        var email = document.getElementById("email").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(pattern))
        {
            error = 0;
            return true;
        }else{
            if(email == ''){
                toastConfig();
                Command: toastr["warning"]('Email está vacío', "Atención");
            }else{
                toastConfig();
                Command: toastr["warning"]('Email: ' + email + ' no valido', "Atención");
            }
            error = 1;
        }

    });

    let error = 0;

    $('#signupRut').rut({
        fn_error : function(input){
            if(input.val() === ''){
                toastConfig();
                Command: toastr["warning"]('El rut está vacío', "Atención");
            }else{
                toastConfig();
                Command: toastr["warning"]('El rut: ' + input.val() + ' es incorrecto', "Atención");
            }
            error = 1;
        },
        placeholder: false,
        blur:false,
        required: false
    });

    $("body").on("blur", "#signupEmail", function ()
    {
        var email = document.getElementById("signupEmail").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(pattern))
        {
            error = 0;
            return true;
        }else{
            if(email == ''){
                toastConfig();
                Command: toastr["warning"]('Email está vacío', "Atención");
            }else{
                toastConfig();
                Command: toastr["warning"]('Email: ' + email + ' no valido', "Atención");
            }
            error = 1;
        }

    });

    $("body").on("blur", "#signupPass", function ()
    {
        let clave = $("#signupPass").val();
        if(clave == '' || clave.length < 8){
            error = 1;
            toastConfig();
            Command: toastr["warning"]('Contraseña no valida', "Atención");
        }
    });

    $('#btn_createAcc').on('click', function()
    {
        let form = $("#signup").serializeArray();
        let clave = $("#signupPass").val();
        var email = document.getElementById("signupEmail").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        error = 0;
        //VALIDACION
        $(form).each(function (i, item) {
            if (item.value == '' || item.value == null || item.value == undefined || item.value == 0 )
            {
                error = 1;
                $("#" + item.name).addClass('bg-danger');
  
            }
        });

        if(clave.length < 8){
            error = 1;
            toastConfig();
            Command: toastr["warning"]('Contraseña no valida', "Atención");
        }if(clave.length === 0){
            error = 1;
            toastConfig();
            Command: toastr["warning"]('Contraseña vacía', "Atención");
        }

        if(email.match(pattern))
        {
            return true;
        }else{
            error = 1;

            if(email.length < 0){
                toastConfig();
                Command: toastr["warning"]('Email está vacío', "Atención");
            }else{
                toastConfig();
                Command: toastr["warning"]('Email: ' + email + ' no valido', "Atención");
            }
        }

        if (error == 1) {
            toastConfig();
            Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
        }
        else {
            localStorage.setItem("createAcc", JSON.stringify(form));
            var confirmar = confirm("¿Desea registrar la información?");
            if(confirmar===true){
                $.ajax({
                data: { data: JSON.stringify(form) },
                url: "api/signup.php?a=1",
                type: 'POST',
                    success: function (data) {  
                    }
                });
            }else{
                return false;
            }
        }
    });

    /*$('#btn_login').on('click', function()
    {
        let form = $("#login").serializeArray();
        console.log(form);
        localStorage.setItem("user", JSON.stringify(form));
        $.ajax({
            data: {data: JSON.stringify(form)} ,
            url: "api/accion_logion.php",
            type: 'POST',
                success: function (data) {}
            });
    });*/

    //CAMBIO DE COLOR SEGUN VERIFICACIÓN
    $("body").on("blur", ".form-control", function (e) {
        e.preventDefault();
        let valor = $(this).val();
  
        if (valor == '' || valor == null || valor == undefined || valor == 0)
        {
            $(this).addClass('bg-danger');
        }
        else
        {
            $(this).removeClass('bg-danger');
        }
    });
});

