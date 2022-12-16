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
      <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
      <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs5/jq-3.6.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.css"/>
      <link rel="stylesheet" href="css/toastr.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
      <!-- responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- awesome fontfamily -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      

   </head>
     <!-- body -->
   <body class="main-layout">
      <user-header></user-header>
      <!-- reserva-->
      <div class="container-fluid">
         <div class="container">
            <div class="view-account">
               <section class="module">
                  <div class="module-inner">
                     <div class="side-bar">
                        <h1 class="text_align_center">MÓDULOS</h1><br>
                        <div class="col-md-12 text_align_center">
                           <div class="row">
                              <button type="button" data-toggle="modal" data-target="#modalTransporte" class="btn btn-custom-light col-md-3">Transporte</button>
                              <button type="button" data-toggle="modal" data-target="#modalExtra" class="btn btn-custom-light col-md-3">Servicios Extras</button>
                              <button type="button" data-toggle="modal" data-target="#modalAcompanante" class="btn btn-custom-light col-md-3">Acompañantes</button>
                              <button type="button" data-toggle="modal" data-target="#modalTurismo" class="btn btn-custom-light col-md-3">Turismo</button>
                           </div>
                        </div>
                     </div>
                     <div class="content-panel">
                        <div class="row">
                           <div class="col-md-12">
                              <div class="titlepage text_align_center">
                                 <h1 class="form_title">RESERVA</h1>
                                    <div id="datos_depto"  class="container-fluid">
                                    </div>
                                    <div id="datos_reserva" class="container-fluid">
                                       <div class="col-md-12">
                                          <h4 style="color: black;">DATOS RESERVA</h4><br>
                                          <form id="reserva_depto">
                                             <!--ID RESERVA-->
                                             <div class="col-md-2" hidden><label for="">ID Reserva</label>
                                                <input type="text" id="nro_reserva_depto" name="nro_reserva_depto" class="form-control" readonly><br>
                                             </div>
                                          </form>
                                          <form id="reserva">
                                             <div class="row">
                                                <!--ID RESERVA-->
                                                <div class="col-md-2"><label for="">ID Reserva</label>
                                                   <input type="text" id="nro_reserva" name="nro_reserva" class="form-control" readonly><br>
                                                </div>
                                                <!--CANTIDAD PERSONAS-->
                                                <div class="col-md-2"><label for="">Número personas</label>
                                                   <input type="number" id="total_personas" name="total_personas" class="form-control" value="1" readonly><br>
                                                </div>
                                                <!--FECHA RESERVA-->
                                                <div class="col-md-2" readonly><label for="">Fecha Reserva</label>
                                                   <input type="text" id="fecha_reserva" name="fecha_reserva" class="form-control required" readonly><br>
                                                </div>
                                                <!--RANGO FECHA-->
                                                <div class="col-md-4"><label for="">Duración de estadía</label>
                                                   <input type="text" id="daterange" class="form-control" readonly><br>
                                                </div>
                                                <!--FECHA INICIO-->
                                                <div class="col-md-2" hidden><label for="">Fecha inicio</label>
                                                   <input type="text" id="fecha_inicio" name="fecha_inicio" form="reserva_depto" class="form-control required date"><br>
                                                </div>
                                                <!--FECHA TERMINO-->
                                                <div class="col-md-2" hidden><label for="">Fecha termino</label>
                                                   <input type="text" id="fecha_termino" name="fecha_termino" form="reserva_depto" class="form-control required date"><br>
                                                </div>
                                                <!--CANTIDAD DIAS-->
                                                <div class="col-md-2"><label for="">Cantidad de dias</label>
                                                   <input type="number" id="cantidad_dias" class="form-control required" readonly><br>
                                                </div>
                                                <!--VALOR POR DIA-->
                                                <div class="col-md-2"><label for="">Valor total por dias</label>
                                                   <input type="number" id="valor_dias" name="valor_dias" class="form-control" readonly><br>
                                                </div>
                                                <!--VALOR TOTAL-->
                                                <div class="col-md-2"><label for="">Valor total reserva</label>
                                                   <input type="number" id="valor_total" name="valor_total" class="form-control" readonly><br>
                                                </div>
                                                <!--RUT CLIENTE-->
                                                <div class="col-md-2" hidden>
                                                   <input type="text" id="rut_cliente" name="rut_cliente" class="form-control" readonly><br>
                                                </div>
                                             </div>
                                          </form>
                                       </div>
                                    </div>
                                    <div data-toggle="tooltip" data-placement="bottom" title="Primero debes elegir una fecha de estadía">
                                       <button type="button" data-toggle="modal" data-target="#modalPago" class="btn btn-custom btn-block col-md-12" id="pagar" disabled>Ir a pagar</button>                             
                                    </div>
                                    <button type="button" class="btn btn-custom btn_cancelar btn-block col-md-12" onclick="history.back()">Cancelar</button> 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
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
               </div>
               <div class="modal-body">
                  <form id="md_transporte">
                     <div class="col-md-12">
                        <!--ID RESERVA-->
                        <div class="col-md-2" hidden><label for="">ID Reserva</label>
                           <input type="text" id="nro_reserva_transporte" name="nro_reserva_transporte" class="form-control">
                        </div>
                        <details id="ida" open>
                           <summary>IDA</summary>
                           <div class="row">
                              <!--HORARIO-->
                              <div class="col-md-4"><label for="">Fecha/Hora Recogida</label>
                                 <input type="text" id="ida_hora" name="ida_hora" class="form-control ida time" readonly>
                              </div><br>
                              <div class="col-md-4">
                              </div><br>
                              <!--VALOR IDA-->
                              <div class="col-md-4"><label for="">Valor viaje</label>
                                 <input type="text" id="ida_valor" name="ida_valor" class="form-control ida time" value="0" readonly>
                              </div><br>
                              <p>ORIGEN</p>
                              <!--REGION ORIGEN-->
                              <div class="col-md-6"><label for="">Región Origen</label>
                                 <select type="text" id="ida_region_origen" name="ida_region_origen" class="form-control ida">
                                    <option value="0">Seleccione Región</option>
                                    <option value="1">NO TRANSPORTE</option>
                                 </select>
                              </div><br>
                              <!--DIRECCIÓN ORIGEN-->
                              <div class="col-md-6"><label for="">Dirección Origen</label>
                                 <input id="ida_origen" name="ida_origen" class="form-control required ida" placeholder="Formato: Calle, Número">
                              </div><br>
                              <p>DESTINO</p>
                              <!--REGION DESTINO-->
                              <div class="col-md-6"><label for="">Región Destino</label>
                                 <select type="text" id="ida_region_destino" name="ida_region_destino" class="form-control ida">
                                    <option value="0">Seleccione Región</option>
                                    <option value="1">NO TRANSPORTE</option>
                                 </select>
                              </div><br>
                              <!--DIRECCIÓN DESTINO-->
                              <div class="col-md-6"><label for="">Dirección Destino</label>
                                 <input id="ida_destino" name="ida_destino" class="form-control required ida" placeholder="Formato: Calle, Número">
                              </div><br>
                           </div>
                        </details>
                        <details id="vuelta" class="hidden">
                           <summary>VUELTA</summary>
                           <div class="row">
                              <!--HORARIO-->
                              <div class="col-md-4"><label for="">Fecha/Hora Recogida</label>
                                 <input type="text" id="vuelta_hora" name="vuelta_hora" class="form-control time" readonly>
                              </div><br>
                              <div class="col-md-4">
                              </div><br>
                              <!--VALOR IDA-->
                              <div class="col-md-4"><label for="">Valor viaje</label>
                                 <input type="text" id="vuelta_valor" name="vuelta_valor"  class="form-control time" value="0" readonly>
                              </div><br>
                              <p>ORIGEN</p>
                              <!--REGION ORIGEN-->
                              <div class="col-md-6"><label for="">Región Origen</label>
                                 <select type="text" id="vuelta_region_origen" name="vuelta_region_origen" class="form-control">
                                    <option value="0">Seleccione Región</option>
                                    <option value="1">NO TRANSPORTE</option>
                                 </select>
                              </div><br>
                              <!--DIRECCIÓN ORIGEN-->
                              <div class="col-md-6"><label for="">Dirección Origen</label>
                                 <input id="vuelta_origen" name="vuelta_origen" class="form-control required" placeholder="Formato: Calle, Número">
                              </div><br>
                              <p>DESTINO</p>
                              <!--REGION DESTINO-->
                              <div class="col-md-6"><label for="">Región Destino</label>
                                 <select type="text" id="vuelta_region_destino" name="vuelta_region_destino" class="form-control">
                                    <option value="0">Seleccione Región</option>
                                    <option value="1">NO TRANSPORTE</option>
                                 </select>
                              </div><br>
                              <!--DIRECCIÓN DESTINO-->
                              <div class="col-md-6"><label for="">Dirección Destino</label>
                                 <input id="vuelta_destino" name="vuelta_destino" class="form-control required" placeholder="Formato: Calle, Número">
                              </div><br>
                           </div>
                        </details>
                        <div class="check col-md-12">
                           <label for="">Invertir datos de <strong>IDA</strong> para la <strong>VUELTA</strong></label>
                           <input type="checkbox" id="same_data" checked>
                        </div>
                        <div class="row">
                           <div class="col-md-3"></div>
                           <div class="col-md-6 text_align_center"><label for="">Valor Total</label>
                              <input id="valor_transporte" name="valor_transporte" class="form-control total" value="0" readonly>
                           </div>
                           <div class="col-md-3"></div>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="col-md-12 modal-footer">
                  <div class="row">
                     <button type="button" id="btn_addTransporte" class="btn btn-custom col-md-6">Agregar Transporte</button>
                     <button type="button" id="btn_Cancelar_transporte" class="btn btn-custom col-md-6" data-dismiss="modal">Salir</button>
                  </div>
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
               </div>   
               <div class="col-md-12">
                  <div class="modal-body">
                     <!--AGREGAR SERVICIO-->
                     <div class="col-md-12">
                        <details>
                           <summary>Información de los servicios</summary>
                           <div class="row">
                              <div class="col-md-8"><label for="">Servicio Extra</label>
                                 <select id="servicio_extra" name="servicio_extra" class="form-control">
                                    <option value="0">SELECCIONE SERVICIO</option>
                                 </select>
                              </div>
                              <div class="col-md-4"><label for="">Valor</label>
                                 <input type="number" id="valor_extra" class="form-control" readonly>
                              </div>
                              <div class="col-md-12"><label for="">Descripción</label>
                                 <input type="text" id="descripcion_extra" class="form-control" readonly>
                              </div>
                           </div>
                        </details>
                        <br>
                        <form id="form_extra"></form>
                        <h3>Servicios Extras Agregados</h3>
                        <br>
                        <div class="row">
                           <div class="col-md-12" hidden>
                              <input type="text" id="nro_reserva_extras" name="nro_reserva_extras" form="form_extra" class="form-control" readonly>
                           </div>
                           <div class="col-md-12 text_align_center"><label for="">Servicio Extra 1</label>
                              <select id="servicio_extra1" name="servicio_extra1" form="form_extra" class="form-control required">
                                 <option value="0" data-value="0">SELECCIONE SERVICIO</option>
                                 <option value="1" data-value="0" hidden>SIN SERVICIO</option>
                              </select>
                           </div>
                           <div class="col-md-12 text_align_center"><label for="">Servicio Extra 2</label>
                              <select id="servicio_extra2" name="servicio_extra2" form="form_extra" class="form-control required">
                                 <option value="0" data-value="0">SELECCIONE SERVICIO</option>
                                 <option value="1" data-value="0" hidden>SIN SERVICIO</option>
                              </select>
                           </div>
                           <div class="col-md-12 text_align_center"><label for="">Servicio Extra 3</label>
                              <select id="servicio_extra3" name="servicio_extra3" form="form_extra" class="form-control required">
                                 <option value="0" data-value="0">SELECCIONE SERVICIO</option>
                                 <option value="1" data-value="0" hidden>SIN SERVICIO</option>
                              </select>
                           </div>
                           <div class="col-md-12 text_align_center"><label for="">Valor Total</label>
                              <input type="number" id="total_extra" name="total_extra" form="form_extra" class="form-control" value="0" readonly>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-12 modal-footer">
                        <div class="row">
                           <button type="button" id="btn_Limpiar_Servicio" class="btn btn-custom col-md-6">Limpiar datos</button>
                           <button type="button" id="btn_Cancelar" class="btn btn-custom col-md-6" data-dismiss="modal">Salir</button>
                        </div>      
                     </div>
                  </div>
               </div>   
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
               </div>
               <form id="md_otros">
                  <div class="col-md-12">
                     <div class="modal-body">
                        <div class="row">
                           <!--AGREGAR ACOMPAÑANTE-->
                           <div class="col-md-12 text_align_center">
                              <div class="row">
                                 <div class="col-md-6"><label for="">Cantidad Niños</label>
                                    <input type="number" id="cantidad_ninos" name="cantidad_ninos" min="0" value="0" form="reserva" class="form-control">
                                 </div><br>
                                 <div class="col-md-6"><label for="">Cantidad Adultos</label>
                                    <input type="number" id="cantidad_adultos" name="cantidad_adultos" min="0" value="0" form="reserva" class="form-control">
                                 </div><br>
                              </div>
                           </div>
                        </div> 
                     </div>
                     <div class="modal-footer">
                        <button type="button" id="btn_Limpiar_otro" class="btn btn-custom col-md-6">Limpiar datos</button>
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
               </div>
               <div class="col-md-12">
                     <div class="modal-body">
                        <!--AGREGAR ACTIVIDAD-->
                        <div class="col-md-12">
                        <details>
                           <summary>Información de las actividades</summary>
                           <div class="row">
                              <div class="col-md-12"><label for="">Actividad Turistica</label>
                                 <select id="actividad" name="actividad" class="form-control">
                                    <option value="0">SELECCIONE ACTIVIDAD</option>
                                 </select>
                              </div>
                              <div class="col-md-6"><label for="">Duración</label>
                                 <input type="number" id="actividad_duracion" class="form-control" readonly>
                              </div>
                              <div class="col-md-6"><label for="">Valor</label>
                                 <input type="number" id="actividad_valor" class="form-control" readonly>
                              </div>
                              <div class="col-md-12"><label for="">Descripción</label>
                                 <textarea type="text" id="actividad_descripcion" class="form-control"readonly></textarea>
                              </div>
                           </div>
                        </details>
                        <br>
                        <form id="form_tour"></form>
                        <h3>Actividades Agregadas</h3>
                        <br>
                        <div class="row">
                           <div class="col-md-12" hidden>
                              <input type="text" id="nro_reserva_tour" name="nro_reserva_tour" form="form_tour" class="form-control" readonly>
                           </div>
                           <div class="col-md-12 text_align_center"><label for="">Actividad 1</label>
                              <select id="actividad1" name="actividad1" form="form_tour" class="form-control required">
                                 <option value="0" data-value="0" data-long="0">SELECCIONE ACTIVIDAD</option>
                                 <option value="1" data-value="0" data-long="0" hidden>SIN ACTIVIDAD</option>
                              </select>
                           </div>
                           <div class="col-md-12 text_align_center"><label for="">Actividad 2</label>
                              <select id="actividad2" name="actividad2" form="form_tour" class="form-control required">
                                 <option value="0" data-value="0" data-long="0">SELECCIONE ACTIVIDAD</option>
                                 <option value="1" data-value="0" data-long="0" hidden>SIN ACTIVIDAD</option>
                              </select>
                           </div>
                           <div class="col-md-12 text_align_center"><label for="">Actividad 3</label>
                              <select id="actividad3" name="actividad3" form="form_tour" class="form-control required">
                                 <option value="0" data-value="0" data-long="0">SELECCIONE ACTIVIDAD</option>
                                 <option value="1" data-value="0" data-long="0" hidden>SIN ACTIVIDAD</option>
                              </select>
                           </div>
                           <div class="col-md-6 text_align_center"><label for="">Duración Total (en Min)</label>
                              <input type="number" id="duracion_tour" name="duracion_tour" form="form_tour" class="form-control" value="0" readonly>
                           </div>
                           <div class="col-md-6 text_align_center"><label for="">Valor Total Turismo</label>
                              <input type="number" id="total_tour" name="total_tour" form="form_tour" class="form-control" value="0" readonly>
                           </div>
                        </div>
                     </div>
                        <div class="col-md-12 modal-footer">
                           <div class="row">
                              <button type="button" id="btn_Limpiar_Tour" class="btn btn-custom col-md-6">Limpiar datos</button>
                              <button type="button" id="btn_Cancelar_tour" class="btn btn-custom col-md-6" data-dismiss="modal">Salir</button>
                           </div>
                        </div>   
                     </div>
                  </div>      
            </div>
         </div>
      </div>
      <!-- end Modal Turismo-->
      <!-- Modal PAGO-->
      <div class="modal fade" id="modalPago" tabindex="-1" role="dialog">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h1>Pago</h1>
               </div>   
               <div class="modal-body">
                  <h1 class="text_align_center">Métodos de pago</h1>
                  <div class="metodo">
                     <p>Por el momento, solo están disponibles las transferencias. Sentimos las molestias.</p>
                     <div class="row">
                        <div class="col-md-12">
                           <div class="row">
                              <div class="col-md-12 pago">
                                 <input type="radio" id="transferencia" name="pago" value="transferencia" disabled>
                                 <label for="transferencia">Transferencia Electronica</label><br>
                              </div>
                              <div class="col-md-12 pago">
                                 <input type="radio" id="webpay" name="pago" value="webpay" disabled>
                                 <label for="webpay">WebPay</label><br>
                              </div>
                              <div class="col-md-12 pago">
                                 <input type="radio" id="mercado" name="pago" value="mercado" disabled>
                                 <label for="mercado">Mercado Pago</label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="datos_trans">
                     <h1 class="text_align_center">DATOS DE TRANSFERENCIA</h1>
                     <div class="detalles">
                        <p><strong>Banco:</strong> Santander</p>
                        <p><strong>Tipo de cuenta:</strong> Corriente</p>
                        <p><strong>Número de cuenta:</strong> 12345698</p>
                        <p><strong>Rut:</strong> 76.657.489-5</p>
                        <p><strong>Nombre:</strong> Turismo Real spa</p>
                        <p><strong>Correo electronico:</strong> reservas@turismoreal.cl</p>
                        <p><strong>Asunto:</strong> Indicar el número de reserva</p><p id="asunto_reserva"></p>
                        <p><strong>Total a pagar (40% del total final):</strong><h2 id="ver_total"></h2></p>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-custom" id="btn_completar">Listo</button>
                     <button type="button" class="btn btn-custom" data-dismiss="modal">Salir</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end Modal PAGO-->
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
      <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
   </body>
</html>