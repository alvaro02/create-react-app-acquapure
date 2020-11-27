import React from "react";

const Contacto = () => {
  return (
    <div>
      <div class="w-full px-32">
        {/*CONTENEDOR--MIGAS DE PAN*/}
        <div class="w-32 bg-celesteosc text-center">
          {/*--1--*/}
          <p class="text-sm text-white font-bold">
            Inicio / <u> Contacto </u>
          </p>
        </div>
      </div>

      <div class="w-full px-8 md:px-32 xl:px-40">
        {/*--CONTENEDOR-MAYOR-DE-DUDAS-Y-CONTACTOS-->*/}
        <div class="w-full md:w-6/12 float-left">
          {/*<!--CONTENEDOR-DUDAS-->*/}
          <div class="w-full text-center ">
            {/*<!--1-->*/}
            <h1 class="font-titulo text-2xl text-celeste font-bold text-center">
              ¿TIENES DUDAS?
            </h1>
          </div>
          <form class="bg-white">
            {/*<!--2-->*/}
            <div class="mb-4">
              <label
                class="font-parrafo block text-gray-600 text-sm font-normal mb-2"
                for="username"
              >
                Nombre Completo :
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
            <div class="mb-6">
              <label
                class="font-parrafo block text-gray-600 text-sm font-normal mb-2"
                for="email"
              >
                E-mail :
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
              />
            </div>
            <div class="mb-5">
              <label
                class="font-parrafo block text-gray-600 text-sm font-normal mb-2"
                for="username"
              >
                Mensaje :
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
            <div class="flex items-center justify-between pb-8">
              <button
                class="font-parrafo bg-verde hover:bg-hoverver text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/*<!--FIN-CONTENEDOR-DUDAS-->*/}

        <div class="w-full md:w-6/12 md:justify-center float-none md:float-left">
          {/*<!--CONTENEDOR-CONTACTO-->*/}

          <div class="w-full text-center justify-center">
            {/*<!--1-->*/}
            <h1 class="font-titulo text-2xl text-celeste font-bold text-center">
              CONTACTO
            </h1>
          </div>

          <div class="w-full px-8 mt-8 ">
            {/*<!--2-->*/}
            <p class=" font-parrafo text-xl text-black font-bold">Dirección:</p>
            <p class=" font-parrafo text-lg text-black font-normal">
              Ramón Barros Luco #0793, Maipú
            </p>
            <p class=" font-parrafo text-lg text-black font-normal pb-4">
              Santiago{" "}
            </p>
          </div>
          <div class="w-full px-8 ">
            {/*<!--3-->*/}
            <p class=" font-parrafo text-xl text-black font-bold">Teléfonos:</p>
            <p class=" font-parrafo text-lg text-black font-normal">
              +56 9 7536 9720
            </p>
            <p class=" font-parrafo text-lg text-black font-normal">
              +56 9 5237 1336
            </p>
            <p class=" font-parrafo text-lg text-black font-normal">
              +56 9 5019 3757
            </p>
          </div>
          <div class="w-full px-8 ">
            {/*<!--4-->*/}
            <p class="font-parrafo text-xl text-black font-bold">
              Correo Electrónico:
            </p>

            <p class="font-parrafo text-lg text-black font-normal">
              contacto@acquapure.cl
            </p>
          </div>
        </div>
        {/*<!--FIN-CONTENEDOR-CONTACTO-->*/}
      </div>
      {/*<!--FIN-CONTENEDOR-MAYOR-DUDAS-Y-CONTACTO-->*/}
    </div>
  );
};

export default Contacto;
