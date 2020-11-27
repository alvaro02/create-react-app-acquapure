import React from "react";
import aqua_pure from "../../assets/img/aqua_pure.png";
import face from "../../assets/img/logo-de-facebook-blanco.svg";
import insta from "../../assets/img/logotipo-de-instagram-blanco.svg";

const Foot = () => {
  return (
    <div>
      <div className="w-full px-8 pt-2 lg:px-32 pt-5 bg-foote pb-8">
        <div className="w-full md:flex md:content-evenly">
          <div className="w-1/5 flex items-center justify-center">
            <img className="w-40 flex " alt="logo" src={aqua_pure} />
          </div>
          <div className="w-2/5 pt-7">
            <div className="flex justify-center">
              <h1 className="block size text-base text-white font-bold font-titulo">
                CONTACTO
              </h1>
            </div>
            <div className="text-sm font-parrafo text-white flex flex-col ml-2 pt-3">
              <p className="flex justify-center">Ramón Barros Luco #0793,</p>
              <p className="pl-14">Maipú, Santiago</p>
              <p className="block pl-14">contacto@acquapure.cl</p>
              <p className="block pl-14">Teléfonos +56 9 7536 9720</p>
              <p className="block flex justify-end mr-13">+56 9 5237 1336</p>
              <p className="block flex justify-end mr-13">+56 9 5019 3757</p>
            </div>
          </div>

          <div className="w-1/5 md:pt-7">
            <div className="flex justify-center">
              <h1 className="block size text-base text-white font-bold font-titulo">
                MENU
              </h1>
            </div>
            <div className="text-sm font-parrafo text-white font-parrafo pt-3">
              <p className="block flex justify-center">Inicio</p>
              <p className="block flex justify-center">Ofertas</p>
              <p className="block flex justify-center">Recargas</p>
              <p className="block flex justify-center">Contacto</p>
            </div>
          </div>

          <div className="w-1/5 md:pt-7">
            <div>
              <h1 className="block size text-base text-white font-titulo font-bold">
                REDES SOCIALES
              </h1>
            </div>
            <div className="text-sm text-white font-parrafo pt-3">
              <div className="w-full flex">
                <img className="w-7 -m-2" alt="Facebook" src={face}></img>
                <p className="flex justify-center">Facebook</p>
              </div>
              <div className="w-full flex">
                <img className="w-7 -m-2" alt="Instagram" src={insta}></img>
                <p className="flex justify-center">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
