import React from "react";
import Iniciasesion from "../../assets/img/sesion.png";
import Aguanaranja from "../../assets/img/i4.jpg";
import { Link } from "react-router-dom";

const Sesion = () => {
  return (
    <div>
      <div class="w-full overflow-hidden relative">
        <img
          class="visible md:invisible absolute inset-0 h-full w-full object-cover"
          src={Iniciasesion}
          alt="fondo"
        />
        <img
          class="invisible w-0 md:visible md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
          src={Aguanaranja}
          alt="fondo"
        />
        <div class="flex h-full items-center justify-center relative">
          <div className="md:w-1/2 md:h-3/4 md:m-auto md:py-40">
            <div className="w-full px-8 md:px-4 float-left md:bg-white">
              <div className="md:px-14 pt-7">
                <form className="md:text-sm text-base font-parrafo">
                  <div className="w-full text-center pb-4">
                    <h1 className="font-titulo text-2xl text-celeste font-bold">
                      Regístrate
                    </h1>
                  </div>
                  <div className="mb-1">
                    <label className="block text-plomo  mb-1" for="email">
                      Nombre Completo:
                    </label>
                    <input
                      className="border-2 border-plomo border-opacity-50 shadow-lg appearance-none  w-full py-1 px-3 focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-plomo  mb-1" for="email">
                      RUT:
                    </label>
                    <input
                      className="border-2 border-plomo border-opacity-50 shadow-lg appearance-none  w-full py-1 px-3 focus:outline-none focus:shadow-outline"
                      id="rut"
                      type="number"
                      placeholder="12312312-3"
                    />
                  </div>
                  <div className="mb-1">
                    <label className=" block text-plomo mb-1" for="username">
                      E-mail:
                    </label>
                    <input
                      className="border-2 border-plomo border-opacity-50 shadow-lg appearance-none  w-full py-1 px-3  focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-plomo  mb-1" for="email">
                      Contraseña:
                    </label>
                    <input
                      className="border-2 border-plomo border-opacity-50 shadow-lg appearance-none  w-full py-1 px-3 focus:outline-none focus:shadow-outline"
                      id="psswd"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-plomo  mb-1" for="email">
                      Repetir Contraseña:
                    </label>
                    <input
                      className="border-2 border-plomo border-opacity-50 shadow-lg appearance-none  w-full py-1 px-3 focus:outline-none focus:shadow-outline"
                      id="psswd"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center pb-4">
                    <button
                      className=" bg-verde hover:bg-hoverver text-white font-bold w-full md:w-20 py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Listo
                    </button>
                  </div>
                  <div className="w-full font-parrafo text-center">
                    <h4 className="text-lg text-white md:text-celeste">
                      Tienes cuenta?
                    </h4>
                    <Link to={"/Sesion"}>
                      {" "}
                      <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-bold text-lg text-white md:text-celeste pb-20">
                        Iniciar Sesión
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sesion;
