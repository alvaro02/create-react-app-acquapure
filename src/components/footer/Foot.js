import React from "react";
import aqua_pure from "../../assets/img/aqua_pure.png";
import face from "../../assets/img/logo-de-facebook-blanco.svg";
import insta from "../../assets/img/logotipo-de-instagram-blanco.svg";
import {Link} from 'react-router-dom';

const Foot = () => {
  return (
    <div>
      <div className="w-full md:flex bg-foote px-8 pt-2 lg:px-32">
        <div className="invisible w-0 md:visible w-4/12 flex items-center justify-center">
          <img className="w-56" alt="Logo" src={aqua_pure} />
        </div>

        <div className="grid justify-items-center md:w-3/12 md:py-7 md:grid-cols-1">
          <div className="w-full block size flex justify-center">
            <h1 className="text-base text-white font-bold font-titulo">
              CONTACTO
            </h1>
          </div>
          <div className="w-full pt-4 pl-4 text-white font-parrafo text-sm grid-cols-1 md:px-4 text-center md:text-left">
            <p className="block">Ramón Barros Luco #0793, Maipú, Santiago</p>
            <p className="block py-3 ">contacto@acquapure.cl</p>
            <p className="block">Teléfonos</p>
            <p className="block">+56 9 7536 9720</p>
            <p className="block">+56 9 5237 1336</p>
            <p className="block">+56 9 5019 3757</p>
          </div>
        </div>

        <div className="w-full md:w-2/12 pt-7">
          <div className="w-full size text-center">
            <h1 className="text-base text-white font-bold font-titulo text-center">
              MENU
            </h1>
          </div>
          <div className="w-full pt-4 text-white font-parrafo text-sm text-center">
            <Link to={'/'}><p className="uppercase">Inicio</p></Link>
            <Link to={'/Catalogo'}><p className="uppercase">Catalogo</p></Link>
            <Link to={'/Nosotros'}><p className="uppercase">Nosotros</p></Link>
            <Link to={'/Contacto'}><p className="uppercase">Contacto</p></Link>
          </div>
        </div>

        <div className="w-full md:w-3/12 pt-7">
          <div className="w-full block text-center">
            <h1 className="text-base text-white font-bold font-titulo">
              REDES SOCIALES
            </h1>
          </div>
          <div className="flex justify-evenly pt-6 visible md:invisible md:w-0">
            <img className="w-7 md:w-5" alt="facebook" src={face}></img>
            <img className="w-7 md:w-5" alt="instagram" src={insta}></img>
          </div>
          <div className="w-0 md:w-full pb-7 text-white font-parrafo text-sm">
            <div className="flex md:justify-center">
              <img className="w-7 md:w-5" alt="facebook" src={face}></img>
              <p className="invisible md:visible pl-3">Facebook</p>
            </div>
            <div className="flex md:justify-center md:pt-4 ">
              <img className="w-7 md:w-5" alt="instagram" src={insta}></img>
              <p className="invisible md:visible pl-3">Instagram</p>
            </div>
          </div>
        </div>
        <div className="visible md:invisible w-full md:w-0 flex items-center justify-center -mt-7 pb-10">
          <img className="w-40" alt="Logo" src={aqua_pure} />
        </div>
      </div>
    </div>
  );
};

export default Foot;
