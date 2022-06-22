import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../index.css";
import swal from "sweetalert";
import Maps from "./Maps";

//Format date
import {format} from "date-fns";

const Search = () => {
  // const urlOrders = "http://34.75.198.96:4200/allOrders/";
  const urlOrderById = "http://34.75.198.96:4200/getOrderById/";
  const urlMapById = "http://34.75.198.96:4200/getMapById/";

  const [busqueda, setBusqueda] = useState();
  const [findClient, setFindClient] = useState();
  const [showTracking, setShowTracking] = useState(false);
  const [showDatesClient, setShowDatesClient] = useState(false);


  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string("Recuerda que este es un campo Alfanumerico").required(
        "Campo Requerido"
      ),
    }),
    onSubmit: ({ search }) => {
      generar(search);
      setShowTracking(!showTracking);
    },
  });
  async function generar(searchIdTracking) {
      const busq = await getData(searchIdTracking, urlMapById);
      setBusqueda(busq);
  }
  async function generarDatosCliente(searchIdOrder) {
    const busqCliente = await getData(searchIdOrder, urlOrderById);
    setFindClient(busqCliente);
  }

  function onSubmitCliente() {
    generarDatosCliente(busqueda.id_order);
    console.log(findClient);
    setShowDatesClient(!showDatesClient);
  }

  const getData = async (idOrder, url) => {
    try {
      let response = await fetch(url + idOrder);
      if(response.status === 508){
        swal("No exise esta orden!", "Verifique e ingrese nuevamente el codigo de orden", "error");
        return;
      }
      let data = await response.json();      
      console.log(data);
      return data;
    } catch (err) {
      swal("Error!", "Ocurrió un error en la petición", "error");
    }
  };

  // const getData = async (idOrder, url) => {
  //   try {
  //     let response = await fetch(url + idOrder);
  //     let data = await response.json();
  //     console.log(data);
  //     return data;

  //   } catch (err) {
  //     console.log("No se logro traer la informacion");
  //   }
  // };

  // const getData = async (idOrder, url) => {
  //   try {
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     for (let item of data) {
  //       if (item.id_order === Number(idOrder)) {
  //         return item;
  //       } else {
  //         swal(
  //           "No existe este Numero de Orden!",
  //           "Verifica e ingresalo nuevamente!",
  //           "error"
  //         );
  //       }
  //     }
  //   } catch (err) {
  //     console.log("No se logro traer la informacion");
  //   }
  // };
  
  return (
    <div>
      <center>
        <h2 className="encuentra">ENCUENTRA TU PEDIDO</h2>

        <form className="formSearch" onSubmit={formik.handleSubmit}>
          <div className="input-group mb-1 contBusqueda">
            <button
              className="btn btn-primary"
              name="search"
              type="submit"
              id="button-addon1"
              style={{ color: "white" }}
            >
              Rastrear
            </button>
            <input
              type="search"
              className="form-control"
              name="search"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.search}
              placeholder="ID Orden"
            />
            {formik.errors.search && formik.touched.search ? (
              <div style={{ color: "red" }}>
                Recuerda que este es un campo Alfanumerico
              </div>
            ) : null}
          </div>
        </form>

        {busqueda && showTracking && (
          <>
            <div
              className="InfoBusqueda"
              
            >
              <div className="contDatos">
                <div className="contDatosRast">
                  <h4 className="contDatostitle" style={{ textAlign: "center" }}>INFORMACIÓN DE RASTREO</h4>

                  <div className="ContDireccionts">
                    {/* <p>{busqueda._id}</p> */}
                    <div className="ContTitulosRastreo">
                      <h6 className="contDatostitle">DIRECCIÓN DE ORIGEN</h6>
                      <p className="pText">{busqueda.address_origin} </p>
                    </div>
                    <div className="ContTitulosRastreo">
                      <h6 className="contDatostitle">DIRECCIÓN DE DESTINO</h6>
                      <p className="pText" >{busqueda.address_destiny} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contMapa">
              <Maps datBusqueda={busqueda} />
            </div>
            <div>
              <button
                className="btn btn-primary btnVerRuta-MasInfo"
                name="MasInfo"
                type="submit"
                id="button-addon2"
                style={{ color: "white" }}
                onClick={() => onSubmitCliente()}
              >
                Mas Información
              </button>
            </div>
          </>
        )}

        {findClient && showDatesClient &&  (
          <>
            <div className="InfoBusqueda" style={{ visibility: "visible", marginTop: "2%"}}>
              <div className="contDatos">
                <div className="contDatosCli-Env">
                  <h4 className="contDatostitle">Datos del Cliente</h4>
                  <br />
                  <p className="">
                    <b>Cliente:</b> {findClient[0].client_name}
                  </p>
                  <p className="">
                    <b>Correo:</b> {findClient[0].client_email}
                  </p>
                  <p className="">
                    <b>Telefono:</b> {findClient[0].client_phone}
                  </p>
                </div>
                <div className="contDatosCli-Env">
                  <h4 className="contDatostitle">Datos de la Orden</h4>
                  <br />
                  <p className="">
                    <b>ID:</b> {busqueda._id}
                  </p>
                  <p className="">
                    <b>Estatus:</b> {findClient[0].status_order}
                  </p>
                  <p className="">
                  
                    <b>Fecha de Envio:</b> {format(new Date(findClient[0].date_delivery), "dd/MM/yyyy")}
                  </p>
                  <p className="">
                    <b>Tiempo Estimado:</b> {findClient[0].estimated_time}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </center>
    </div>
  );
};
export default Search;
