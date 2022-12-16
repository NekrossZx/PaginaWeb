<!DOCTYPE html>
<html lang="en">
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>Turismo Real</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      <!-- style css -->
      <link rel="stylesheet" href="css/style.css">
      <!-- responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- awesome fontfamily -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/jq-3.6.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.css"/>
   </head>
   <!-- body -->
   <body class="main-layout">
      <user-header></user-header>
      <!-- end header -->
      <!-- six_box-->
      <div id="about" class="banner_main">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div class="titlepage text_align_center">
                     <img id="logo_banner" src="images/logo_oscuro.png" alt="#" />
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end six_box-->
      <!-- about-->
      <div class="banner_main2">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div class="titlepage">
                     <h2>Nosotros</h2>
                     <p>Conocenos </p>
                  </div>
               </div>
               <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                     <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                     <li data-target="#myCarousel" data-slide-to="1"></li>
                     <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="container">
                           <div class="carousel-caption relative">
                              <div class="bg_white">
                                 <h1>QUIENES SOMOS</h1>
                                 <h2 style="color: rgb(131, 131, 131);">Somos Turismo Real, una empresa familiar que se dedica al arriendo de departamentos y servicios de turismo en zonas turísticas de todo el país. Tenemos 10 años en el mercado y de a poco nos hemos hecho conocida por la calidad de nuestros departamentos, ubicación y trato gentil hacia nuestro clientes.</h2>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container">
                           <div class="carousel-caption relative">
                              <div class="bg_white">
                                 <h1>MISIÓN</h1>
                                 <h2 style="color: rgb(131, 131, 131);">Ofrecer un servicio de calidad y confort en el mercado de servicio hospedaje y turismo, proveyendo a nuestros clientes productos de alta calidad, creando con ello la satisfacción total y dándonos a conocer por nuestros servicios y atención única en todo el país.</h2>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container">
                           <div class="carousel-caption relative">
                              <div class="bg_white">
                                 <h1>VISIÓN</h1>
                                 <h2 style="color: rgb(131, 131, 131);">Ofrecer experiencias positivas inolvidables para nuestros invitados nacionales e internacionales a través de la excelencia en nuestros servicios de hospedaje y restaurante; logrando valor para nuestros clientes, los colaboradores de nuestra empresa, proveedores, inversionistas y para la sociedad.</h2>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
      <!-- end about-->
      <!-- services -->
      <div class="services_main" >
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage" style="margin-top: -80px;">
                     <h2>Servicios</h2>
                     <span>Tu experiencia ideal con todo lo que tenemos para ofrecer.</span>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-sm-12">
                  <ul class="nav nav-tabs md-tabs border_none" id="myTabMD" role="tablist">
                     <li class="nav-item lisertab">
                        <a class="nav-link servi_tab active" id="home-tab-md" data-toggle="tab" href="#home-md" role="tab" aria-controls="home-md"
                           aria-selected="true">ALOJAMIENTO</a>
                     </li>
                     <li class="nav-item lisertab">
                        <a class="nav-link servi_tab" id="profile-tab-md" data-toggle="tab" href="#profile-md" role="tab" aria-controls="profile-md"
                           aria-selected="false">SERVICIOS</a>
                     </li>
                     <li class="nav-item lisertab">
                        <a class="nav-link servi_tab" id="contact-tab-md" data-toggle="tab" href="#contact-md" role="tab" aria-controls="contact-md"
                           aria-selected="false">TURISMO</a>
                     </li>
                  </ul>
                  <div class="tab-content card back_bg" id="myTabContentMD">
                     <!--ALOJAMIENTO-->
                     <div class="tab-pane fade show active" id="home-md" role="tabpanel" aria-labelledby="home-tab-md">
                        <div class="row">
                           <div class="col-md-4 col-sm-6 padding_0 margin_right20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img1.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_top70p margin_right20 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img2.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img3.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170">
                              <div class="services margin_left60">
                                 <div class="services_img">
                                    <figure><img src="images/service_img4.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!--SERVICIOS-->
                     <div class="tab-pane fade" id="profile-md" role="tabpanel" aria-labelledby="profile-tab-md">
                        <div class="row">
                           <div class="col-md-4 col-sm-6 padding_0 margin_right20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img3.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_top70p margin_right20 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img2.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img4.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170">
                              <div class="services margin_left60">
                                 <div class="services_img">
                                    <figure><img src="images/service_img1.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!--TURISMO-->
                     <div class="tab-pane fade" id="contact-md" role="tabpanel" aria-labelledby="contact-tab-md">
                        <div class="row">
                           <div class="col-md-4 col-sm-6 padding_0 margin_right20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img4.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_top70p margin_right20 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img2.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src="images/service_img1.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170">
                              <div class="services margin_left60">
                                 <div class="services_img">
                                    <figure><img src="images/service_img3.png" alt="#" />  </figure>
                                    <div class="ho_dist">
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end services -->
      <!-- instant -->
      <div class="instant">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-6">
                  <div class="titlepage text_align_left">
                     <h2>Los mejores departamentos del país, aquí.</h2>
                     <p>Revisa nuestro cátalogo de departamentos disponibles a lo largo de todo Chile. Encuentra el que buscas al mejor precio y con la mejor calidad de servicios.</p>
                     <a class="read_more" id="deptos" href="departamentos.php">Reservar</a>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="instant_img">
                     <figure><img src="images/pc.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end instant -->      
      <!-- footer -->
      <index-footer></index-footer>
      <!-- end footer -->
      
      <!-- Javascript files-->
      <script src="js/jquery.min.js" ></script>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
      <script src="js/custom.js"></script>
      <script src="js/template.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/jq-3.6.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.js"></script>
   </body>
</html>
