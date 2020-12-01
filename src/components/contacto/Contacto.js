import React from "react";

const Contacto = () => {
  return (
    <div className="w-full px-8 lg:px-32 ">
      {/*CONTENEDOR--MIGAS DE PAN*/}
      <div className="w-full pt-1">
        <div className="w-full md:w-48 bg-celesteosc text-center">
          {/*1*/}
          <p className="font-parrafo text-sm text-white font-bold">
            Inicio / <u> Contacto </u>
          </p>
        </div>
      </div>
      {/*CONTENEDOR-MAYOR*/}
      <div className="w-full pt-5">
        {/*CONTENEDOR-DUDAS*/}
        <div className="w-full md:w-6/12 float-left">
          {/*CONTENEDOR-TITULO-¿TIENES-DUDAS?*/}
          <div className="w-full text-center ">
            <h1 className="font-titulo text-2xl text-celeste font-bold">
              ¿TIENES DUDAS?
            </h1>
          </div>
          {/*CONTENEDOR-FORMULARIO*/}
          <div className="md:px-14 pt-7">
            <form className="md:text-sm text-base font-parrafo">
              <div className="mb-4">
                <label className=" block text-plomo mb-2" for="username">
                  Nombre Completo :
                </label>
                <input
                  className="border-2 border-plomo border-opacity-50 shadow-lg appearance-none  w-full py-1 px-3  focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label className="block text-plomo  mb-2" for="email">
                  E-mail :
                </label>
                <input
                  className="border-2 border-plomo border-opacity-50 shadow-lg appearance-none  w-full py-1 px-3 focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-5">
                <label className=" block text-plomo text-sm mb-2" for="mensaje">
                  Mensaje :
                </label>
                <textarea
                  className="border-2 border-plomo border-opacity-50 form-textarea resize-none shadow-lg appearance-none w-full py-6 px-3 focus:outline-none focus:shadow-outline"
                  id="mensaje"
                  type="textarea"
                  rows="3"
                />
              </div>
              <div className="flex items-center justify-between pb-8">
                <button
                  className=" bg-verde hover:bg-hoverver text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        {/*CONTENEDOR-CONTACTO*/}
        <div className="w-full md:w-6/12 md:justify-center float-none md:float-left">
          {/*CONTENEDOR-TITUTLO-CONTACTO*/}
          <div className="w-full text-center justify-center font-titulo text-2xl text-celeste font-bold">
            <h1 className="">CONTACTO</h1>
          </div>
          {/*CONTENEDOR-CONTENIDO-CONTACTO*/}
          <div className="grid justify-items-center font-parrafo w-full pt-5">
            <div className="">
              <p className="pt-2 text-lg font-bold font-titulo">Dirección:</p>
              <p className="text-base">Ramón Barros Luco #0793, Maipú</p>
              <p className="text-base pb-4">Santiago. </p>

              <p className="text-lg font-bold font-titulo">Teléfonos:</p>
              <p>+56 9 7536 9720</p>
              <p>+56 9 5237 1336</p>
              <p className="pb-4">+56 9 5019 3757</p>

              <p className="text-lg font-bold font-titulo">Correo Electrónico</p>
              <p className="pb-7">contacto@acquapure.cl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
