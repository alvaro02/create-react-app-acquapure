import React from "react";
import l10 from "../../assets/img/10l.png";
import l20 from "../../assets/img/20l.png";
import caja10 from "../../assets/img/bidoncaja10.png";
import caja20 from "../../assets/img/bidoncaja20.png";
import dispensa from "../../assets/img/Dispensador-blanco-hor--1024x683.png";
import {Link} from 'react-router-dom';

const Catalogo = () => {
  return (
    <div className="w-full px-8 lg:px-32 pt-5">
      <div className="w-full">
        <div className="w-48 bg-celesteosc -mt-4">
          <p className="text-sm text-white text-center font-bold">
            <Link to="/"> Inicio </Link>/ <u> Contacto </u>
          </p>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl text-blue-400 font-bold text-center pt-2">
          Kit Inicial
        </h1>
      </div>

      <div className="w-full">
        <div className="md:flex">
          <div className="w-full md:w-1/2">
            <div className="flex justify-center">
              <img className="w-20 mt-12" src={l20} />
              <img className="w-20" src={caja20} />
            </div>
            <div className="font-parrafo font-bold pt-3">
              <p className="flex justify-center text-plomo text-lg">
                2 Botellones de 20 LT + Dispensador
              </p>
            </div>

            <div className="pt-3 flex justify-evenly text-white">
              <button className="bg-celeste rounded-lg px-4 font-bold fond-titulo">
                10.000
              </button>
              <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold fond-titulo">
                Agregar
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 float-left">
            <div className="flex justify-center">
              <img className="w-20 mt-12" src={l10} />
              <img className="w-20" src={caja10} />
            </div>
            <div className="font-parrafo font-bold pt-3">
              <p className="flex justify-center text-plomo text-lg">
                2 Botellones de 10 LT + Dispensador
              </p>
            </div>

            <div className="pt-3 flex justify-evenly text-white">
              <button className="bg-celeste rounded-lg px-4 font-bold fond-titulo">
                10.000
              </button>
              <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold fond-titulo">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-contenedor mb-10">
        <div className="w-full">
          <h1 className="text-2xl text-blue-400 font-bold text-center py-20">
            PRODUCTOS
          </h1>
        </div>
        <div className="md:flex">
          <div className="w-full md:w-1/3">
            <div className="flex justify-center">
              <img className="w-20  mt-12" src={l20} />
            </div>
            <div className="font-parrafo font-bold pt-3">
              <p className="flex justify-center text-plomo text-lg">
                Recarga de 20 LT
              </p>
            </div>

            <div className="pt-3 flex justify-evenly text-white">
              <button className="bg-celeste rounded-lg px-4 font-bold fond-titulo">
                2.500
              </button>
              <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold fond-titulo">
                Agregar
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 float-left">
            <div className="flex justify-center">
              <img className="w-20 mt-12" src={l10} />
            </div>
            <div className="font-parrafo font-bold pt-3">
              <p className="flex justify-center text-plomo text-lg">
                Recarga de 10 LT
              </p>
            </div>

            <div className="pt-3 flex justify-evenly text-white">
              <button className="bg-celeste rounded-lg px-4 font-bold fond-titulo">
                1.500
              </button>
              <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold fond-titulo">
                Agregar
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex justify-center">
              <img className="w-48 mt-16" src={dispensa} />
            </div>
            <div className="font-parrafo font-bold pt-3">
              <p className="flex justify-center text-plomo text-lg">Dispensador</p>
            </div>

            <div className="pt-3 flex justify-evenly text-white">
              <button className="bg-celeste rounded-lg px-4 font-bold fond-titulo">
                5.000
              </button>
              <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold fond-titulo">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
