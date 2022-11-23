
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

    $("body").on("blur", "#signupEmail", function ()
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

    $('#btn_login').click(function()
    {
        var username=$("#email").val();
        var password=$("#password").val();
        var dataString = 'username='+username+'&password='+password;
        if($.trim(username).length>5 && $.trim(password).length>8)
        {
            $.ajax({
            type: "POST",
            url: "api/login_action.php",
            data: dataString,
            cache: false,
            beforeSend: function(){ $("#btn_login").val('Connecting...');},
            success: function(data){
                if(data)
                {
                    //$("body").load("index.html").hide().fadeIn(1500).delay(6000);
                    
                    console.log(data);
                }
                else
                {
                    //Shake animation effect.
                    toastConfig(); Command: toastr["warning"]('Email no valido', "Atención");
                }
            }
            });
        }
        toastConfig(); Command: toastr["warning"]('Ingresar un email valido', "Atención");
        return false;
    });

    
});

