//FOOTER
class MyFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `<!-- footer -->
         <footer class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-10 offset-md-1">
                     <ul class="social_icon text_align_center">
                        <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                        <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li> <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
                  <div class="col-md-4 col-sm-6">
                     <div class="reader">
                        <a href="index.php"><img class="logo-footer text_align_right" src="images/logo_blanco.png"/></a>
                        <p class= "text_align_right">La mejor empresa de turismo y alojamiento en Chile.</p>
                     </div>
                  </div>
                  <div class="col-md-2 col-sm-6">
                     <div class="reader">
                        <h3>Explorar</h3>
                        <ul class="xple_menu">
                           <li><a href="index.php">Home</a></li>
                           <li><a href="departamentos.php">Departamentos</a></li>
                           <li><a href="contact.php">Contactanos</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                     <div class="reader">
                        <h3>Publicaciones</h3>
                        <ul class="re_post">
                           <li><img src="images/re_img1.jpg" alt="#"/></li>
                           <li><img src="images/re_img2.jpg" alt="#"/></li>
                           <li><img src="images/re_img3.jpg" alt="#"/></li>
                           <li><img src="images/re_img4.jpg" alt="#"/></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                     <div class="reader">
                        <h3>Contactanos</h3>
                        <ul class="re_post">
                           <a class="read_more" href="contact.php">Contacto</a>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="copyright text_align_center">
               <div class="container">
                  <div class="row">
                     <div class="col-md-10 offset-md-1">
                        <p>Copyright 2022 All Right Reserved</p>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      <!-- end footer -->`;
   }
}

customElements.define('my-footer', MyFooter);

//FOOTER INDEX
class indexFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `<!-- footer -->
     <footer class="index-footer">
           <div class="container">
              <div class="row">
                 <div class="col-md-10 offset-md-1">
                    <ul class="social_icon text_align_center">
                       <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                       <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                       <li> <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                       <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                 </div>
                 <div class="col-md-4 col-sm-6">
                    <div class="reader">
                       <a href="index.php"><img class="logo-footer text_align_right" src="images/logo_blanco.png"/></a>
                       <p>La mejor empresa de turismo y alojamiento en Chile.</p>
                    </div>
                 </div>
                 <div class="col-md-2 col-sm-6">
                    <div class="reader">
                       <h3>Explorar</h3>
                       <ul class="xple_menu">
                          <li><a href="index.php">Home</a></li>
                          <li><a href="contact.php">Contactanos</a></li>
                          <li><a href="departamentos.php">Departamentos</a></li>
                       </ul>
                    </div>
                 </div>
                 <div class="col-md-3 col-sm-6">
                    <div class="reader">
                       <h3>Publicaciones</h3>
                       <ul class="re_post">
                          <li><img src="images/re_img1.jpg" alt="#"/></li>
                          <li><img src="images/re_img2.jpg" alt="#"/></li>
                          <li><img src="images/re_img3.jpg" alt="#"/></li>
                          <li><img src="images/re_img4.jpg" alt="#"/></li>
                       </ul>
                    </div>
                 </div>
                 <div class="col-md-3 col-sm-6">
                    <div class="reader">
                       <h3>Contactanos</h3>
                       <ul class="re_post">
                          <a class="read_more" href="contact.php">Contacto</a>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
           <div class="copyright text_align_center">
              <div class="container">
                 <div class="row">
                    <div class="col-md-10 offset-md-1">
                       <p>Copyright 2022 All Right Reserved</p>
                    </div>
                 </div>
              </div>
           </div>
     </footer>
     <!-- end footer -->`;
   }
}

customElements.define('index-footer', indexFooter);

//HEADER
class headerUser extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
     <div id="mySidepanel" class="sidepanel">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <a href="index.php">Home</a>
        <a href="contact.php">Contacto</a>
        <a href="departamentos.php">Departamentos</a>
        <a href="cuenta.php" id="cuenta_side" hidden>Mi Cuenta</a>
        <button type="submit" id="logout" hidden>Cerrar Sesión</button>
     </div>
     <!-- header -->
     <header>
        <!-- header inner -->
        <div class="head-top">
           <div class="container-fluid">
              <div class="row">
                 <div class="col-sm-3">
                    <div class="logo">
                       <a href="index.php"><img src="images/logo1.png" class="logo-top"/></a>
                    </div>
                 </div>
                 <div class="col-sm-9">
                    <ul class="email text_align_right">
                       <li class="d_none"><i class="fa fa-phone" aria-hidden="true"></i>+ 56  2 12345678</a></li>
                       <li class="d_none"> <a href="contacto@turismoreal.cl"><i class="fa fa-envelope" aria-hidden="true"></i>contacto@turismoreal.cl</a></li>
                       <li class="d_none"> <a id="user" href="cuenta.php">Usuario <i class="fa fa-user" aria-hidden="true"></i></a> </li>
                       <li> <button class="openbtn" onclick="openNav()"><img src="images/menu_btn.png"></button></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </header>
     <!-- end header -->`;
   }
}

customElements.define('user-header', headerUser);

$(document).ready(function () {

   

   let usuario = sessionStorage.getItem("user");

   if (usuario == 0 || usuario == null || usuario == '' || usuario == undefined) {
      $("#user").html(`Login <i class="fa fa-user" aria-hidden="true"></i>`);
      $("#user").attr("href", "login.php");
   } else {
      let obj = JSON.parse(usuario);
      let email = obj[0].value;
      $("#user").html(email + `<i class="fa fa-user" aria-hidden="true"></i>`);
      $("#user").attr("href", "cuenta.php");
      $("#cuenta_side").attr("hidden", false);
      $("#logout").attr("hidden", false);
   }
});