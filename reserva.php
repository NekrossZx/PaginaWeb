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
      <title>Reserva - Turismo Real</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.css">
      <!-- style css -->
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/style-reserva.css">
      <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs5/jq-3.6.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.css"/>
      <link rel="stylesheet" href="css/toastr.css">
      <!-- responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- awesome fontfamily -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      

   </head>
     <!-- body -->
   <body class="main-layout">
      <my-header></my-header>
      <!-- reserva-->
      <div class="about top_layer">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div class="col-md-12 text_align_center">
                     <button type="button" data-toggle="modal" data-target="#modalTransporte" class="btn btn-custom-light btn_transporte">Transporte</button>
                     <button type="button" data-toggle="modal" data-target="#modalExtra" class="btn btn-custom-light btn_extras">Servicios Extras</button>
                     <button type="button" data-toggle="modal" data-target="#modalAcompanante" class="btn btn-custom-light btn_otros">Acompañantes</button>
                     <button type="button" data-toggle="modal" data-target="#modalTurismo" class="btn btn-custom-light btn_turismo">Turismo</button>
                  </div><br>
                  <div class="titlepage text_align_center">
                     <h1 class="form_title">RESERVA</h1>
                     <form id="reserva">
                        <div class="container-fluid">
                           <div class="col-md-12">
                              <h4 style="color: black;">DATOS DEPARTAMENTO</h4><br>
                              <div class="row">
                                 <!--ID-->
                                 <div class="col-md-2"><label for="">ID Departamento</label>
                                    <input type="text" id="id" name="id" class="form-control" readonly><br>
                                 </div>
                                 <!--REGION-->
                                 <div class="col-md-2"><label for="">Región</label>
                                    <input type="text" id="region" name="region" class="form-control" readonly><br>
                                 </div>
                                 <!--DIRECCION-->
                                 <div class="col-md-2"><label for="">Dirección</label>
                                    <input type="text" id="direccion" name="direccion" class="form-control" readonly><br>
                                 </div>
                                 <!--ARRIENDO DIARIO-->
                                 <div class="col-md-2"><label for="">Arriendo Diario</label>
                                    <input type="text" id="arriendo" name="arriendo" class="form-control" readonly><br>
                                 </div>
                                 
                                 <!--SERVICIOS-->
                                 <div class="col-md-12">
                                    <details>
                                       <summary>SERVICIOS INCLUIDOS</summary>
                                       <div class="row">
                                          <!--LUGAR ORIGEN-->
                                          <div class="col-md-12"><label for=""></label>
                                          </div><br>
                                       </div>
                                     </details>
                                 </div><br>
                              </div><br>
                           </div>
                        </div>
                        <div class="container-fluid">
                           <div class="col-md-12">
                              <h4 style="color: black;">DATOS RESERVA</h4><br>
                              <div class="row">
                                 <!--CANTIDAD PERSONAS-->
                                 <div class="col-md-2"><label for="">Número personas</label>
                                    <input type="number" id="nro" name="nro" class="form-control" value="1" readonly><br>
                                 </div>
                                 <!--FECHA RESERVA-->
                                 <div class="col-md-2" readonly><label for="">Fecha Reserva</label>
                                    <input type="date" id="fecha_reserva" name="fecha_reserva" class="form-control required"><br>
                                 </div>
                                 <!--FECHA INICIO-->
                                 <div class="col-md-3"><label for="">Fecha Inicio</label>
                                    <input type="date" id="fecha_inicio" name="fecha_inicio" class="form-control required"><br>
                                 </div>
                                 <!--FECHA TERMINO-->
                                 <div class="col-md-3"><label for="">Fecha Termino</label>
                                    <input type="date" id="fecha_termino" name="fecha_termino" class="form-control required"><br>
                                 </div>
                                 <div class="col-md-3"><label for="">Cantidad de dias</label>
                                    <input type="number" id="cantidad_dias" name="cantidad_dias" class="form-control required"><br>
                                 </div>
                                 <div class="col-md-3"><label for="">Valor total por dias</label>
                                    <input type="number" id="total" name="total" class="form-control" readonly><br>
                                 </div>
                                 
                              </div>
                           </div>
                        </div>
                        <div>
                           <button type="button" class="btn btn-custom btn_guardar btn-block">Ir a pagar</button>
                           <button type="button" class="btn btn-custom btn_cancelar btn-block" onclick="history.back()">Cancelar</button>                              
                        </div>
                    </form>
                  </div>
                  <h1 class="text_align_center">RESUMEN</h1><br>
                  <div class="col-md-12">
                     <button class="accordion">Transporte</button>
                     <div class="panel">
                     </div>
                     <button class="accordion">Servicios Extras</button>
                     <div class="panel">
                        <table id="resumen_servicios">
                           <thead>
                              <tr>
                                 <th>Cantidad Servicio</th>
                                 <th>Valor Total</th>
                                 <th>Servicios Elegidos</th>
                              </tr>
                           </thead>
                        </table>
                     </div>
                     <button class="accordion">Acompañantes</button>
                     <div class="panel">
                        <table id="resumen_otros">
                           <thead>
                              <tr>
                                 <th>RUT</th>
                                 <th>Nombre</th>
                                 <th>Apellido</th>
                              </tr>
                           </thead>
                        </table>
                     </div>
                     <button class="accordion">Turismo</button>
                     <div class="panel">
                        <table id="resumen_tour">
                           <thead>
                              <tr>
                                 <th>Cantidad Actividades</th>
                                 <th>Duración Total</th>
                                 <th>Valor Total</th>
                                 <th>Actividades Elegidas</th>
                              </tr>
                           </thead>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end reserva-->
      <!-- Modal transporte-->
      <div class="modal fade" id="modalTransporte" tabindex="-1" role="dialog">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="text_align_left">Transporte</h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">x</span>
                  </button>
               </div>
               <div class="modal-body">
                  <form id="md_transporte">
                     <div class="col-md-12">
                        <div class="modal-body">
                           <details open>
                              <summary>IDA</summary>
                              <div class="row">
                                 <!--LUGAR ORIGEN-->
                                 <div class="col-md-12"><label for="">Origen</label>
                                    <select id="origen_ida" name="origen_ida" class="form-control required">
                                       <option value="0">Seleccione Origen</option>
                                    </select>
                                 </div><br>
                                 <!--LUGAR DESTINO-->
                                 <div class="col-md-12"><label for="">Destino</label>
                                    <select id="destino_ida" name="destino_ida" class="form-control required">
                                       <option value="0">Seleccione Destino</option>
                                    </select>
                                 </div><br>
                                 <!--HORARIO-->
                                 <div class="col-md-12"><label for="">Hora Recogida</label>
                                    <input type="time" id="horario_ida" name="horario_ida" class="form-control required">
                                 </div>
                              </div>
                            </details>
                            <details>
                              <summary>VUELTA</summary>
                              <div class="row">
                                 <!--LUGAR ORIGEN-->
                                 <div class="col-md-12"><label for="">Origen</label>
                                    <select id="origen_vuelta" name="origen_vuelta" class="form-control required">
                                       <option value="0">Seleccione Origen</option>
                                    </select>
                                 </div><br>
                                 <!--LUGAR DESTINO-->
                                 <div class="col-md-12"><label for="">Destino</label>
                                    <select id="destino_vuelta" name="destino_vuelta" class="form-control required">
                                       <option value="0">Seleccione Destino</option>
                                    </select>
                                 </div><br>
                                 <!--HORARIO-->
                                 <div class="col-md-12"><label for="">Hora Recogida</label>
                                    <input type="time" id="horario_vuelta" name="horario_vuelta" class="form-control required">
                                 </div>
                              </div>
                           </details> 
                        </div>
                     </div>
                  </form>
               </div>
               <div class="col-md-12 modal-footer">
                  <button type="button" id="btn_addTransporte" class="btn btn-custom" >Agregar Transporte</button>
                  <button type="button" id="btn_Cancelar" class="btn btn-custom" data-dismiss="modal">Cancelar</button>
               </div>      
            </div>
         </div>
      </div>
      <!-- end Modal transporte-->
      <!-- Modal servicios extra-->
      <div class="modal fade" id="modalExtra" tabindex="-1" role="dialog">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="text_align_center">Servicios extra</h1>
                  <button type="button" class="close" data-dismiss="modal">
                     <span aria-hidden="true">×</span>
                  </button>
               </div>
               <form id="md_extras">
                  <div class="col-md-12">
                     <div class="modal-body">
                        <div class="row">
                           <!--AGREGAR SERVICIO-->
                           <div class="col-md-12"><label class="text_align_center" >Agregar Servicio</label>
                              <div class="row">
                                 <div class="col-md-12"><label for="">Servicio Extra</label>
                                    <select id="servicio_extra" name="servicio_extra" class="form-control required">
                                       <option value="0">Seleccione Servicio</option>
                                    </select>
                                 </div>
                                 <div class="col-md-6"><label for="">Descripción</label>
                                    <input type="text" id="descripcion_extra" class="form-control" readonly>
                                 </div>
                                 <div class="col-md-6"><label for="">Valor</label>
                                    <input type="number" id="valor_extra" class="form-control" readonly>
                                 </div>
                              </div>
                           </div><br>
                           <table id="extra_service">
                              <thead>
                                 <tr>
                                    <th>Nombre Servicio</th>
                                    <th>Valor</th>
                                    <th>Acciones</th>
                                 </tr>
                              </thead>
                           </table>
                        </div>
                        <button type="button" id="btn_addServicio" class="btn btn-custom">Añadir</button>
                        <div class="col-md-12 modal-footer">
                           <button type="button" id="btn_addTransporte" class="btn btn-custom" >Agregar Servicios</button>
                           <button type="button" id="btn_Cancelar" class="btn btn-custom" data-dismiss="modal">Cancelar</button>
                        </div>
                     </div>
                  </div>
               </form>       
            </div>
         </div>
      </div>
      <!-- end servicios extra-->
      <!-- Modal Acompañantes-->
      <div class="modal fade" id="modalAcompanante" tabindex="-1" role="dialog">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="text_align_center">Acompañantes</h1>
                  <button type="button" class="close" data-dismiss="modal">
                     <span aria-hidden="true">×</span>
                  </button>
               </div>
               <form id="md_otros">
                  <div class="col-md-12">
                     <div class="modal-body">
                        <div class="row">
                           <!--AGREGAR ACOMPAÑANTE-->
                           <div class="col-md-12 text_align_center"><label for="">Agregar Acompañante</label>
                              <div class="row">
                                 <div class="col-md-4"><label for="">RUT Acompañante</label>
                                    <input type="text" id="rut_acompanante" name="rut_acompanante" class="form-control">
                                 </div><br>
                                 <div class="col-md-8"><label for="">Nombres Acompañante</label>
                                    <input type="text" id="nombres_acompanante" name="nombres_acompanante" class="form-control">
                                 </div><br>
                                 <div class="col-md-8"><label for="">Apellidos Acompañante</label>
                                    <input type="text" id="apellidos_acompanante" name="apellidos_acompanante" class="form-control">
                                 </div><br>
                                 <div class="col-md-4">
                                    <button type="button" id="btn_addPersona" class="btn btn-custom">Añadir</button>
                                 </div><br>
                                 <div class="col-md-12">
                                    <table id="acompanante">
                                       <thead>
                                          <tr>
                                             <th>RUT</th>
                                             <th>Nombre</th>
                                             <th>Apellido</th>
                                             <th>Acciones</th>
                                          </tr>
                                       </thead>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-12 modal-footer">
                           <button type="button" id="btn_saveOtros" class="btn btn-custom">Agregar Acompañante/s</button>
                           <button type="button" id="btn_Cancelar_otro" class="btn btn-custom">Cancelar</button>
                        </div>   
                     </div>
                  </div>
               </form>       
            </div>
         </div>
      </div>
      <!-- end Modal Acompañantes-->
      <!-- Modal Turismo-->
      <div class="modal fade" id="modalTurismo" tabindex="-1" role="dialog">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="text_align_center">Turismo</h1>
                  <button type="button" class="close" data-dismiss="modal">
                     <span aria-hidden="true">×</span>
                  </button>
               </div>
               <form id="md_turismo">
                  <div class="col-md-12">
                     <div class="modal-body">
                        <div class="row">
                           <!--AGREGAR ACTIVIDAD-->
                           <div class="col-md-12"><label>Agregar Actividad</label>
                              <div class="row">
                                 <div class="col-md-12"><label for="">Nombre Actividad</label>
                                    <select id="actividad_nombre" name="actividad_nombre" class="form-control required">
                                       <option value="0">Seleccione Actividad</option>
                                    </select>
                                 </div><br>
                                 <div class="col-md-6"><label for="">Duración</label>
                                    <input type="text" id="actividad_duracion" class="form-control" readonly>
                                 </div><br>
                                 <div class="col-md-6"><label for="">Valor</label>
                                    <input type="number" id="actividad_valor" class="form-control" readonly>
                                 </div><br>
                                 <div class="col-md-12"><label for="">Descripción</label>
                                    <input type="text" id="actividad_descripcion" class="form-control" readonly>
                                 </div><br>
                                 <div class="col-md-12">
                                    <table class="col-md-6" id="actividad">
                                       <thead>
                                          <tr>
                                             <th>Nombre</th>
                                             <th>Duración</th>
                                             <th>Valor</th>
                                             <th>Acciones</th>
                                          </tr>
                                       </thead>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <button type="button" id="btn_addActividad" class="btn btn-custom">Añadir</button>
                        <div class="col-md-12 modal-footer">
                           <button type="button" id="btn_saveActividad" class="btn btn-custom">Guardar</button>
                           <button type="button" id="btn_Cancelar_tour" class="btn btn-custom">Cancelar</button>
                        </div>   
                     </div>
                  </div>
               </form>       
            </div>
         </div>
      </div>
      <!-- end Modal Turismo-->
      <my-footer></my-footer>
      
      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
      <script src="js/template.js"></script>
      <script src="js/funciones_reserva.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/v/bs5/jq-3.6.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
      <script src="js/jquery.rut.chileno.min.js"></script>
   </body>
</html>