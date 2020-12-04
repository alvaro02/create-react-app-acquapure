import React from "react";
import hoja from "../../assets/img/eco-black.svg";
import corazon from "../../assets/img/corazon.svg";
import sal from "../../assets/img/sin-sal.svg";
import delivery from "../../assets/img/delivery.svg";
import l10 from "../../assets/img/10l.png";
import l20 from "../../assets/img/20l.png";
import caja10 from "../../assets/img/bidoncaja10.png";
import caja20 from "../../assets/img/bidoncaja20.png";
import {Link} from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <div className="w-full px-8 lg:px-32 pt-5">
        <div className="flex justify-center font-titulo font-bold text-celeste">
          <p className="text-xl md:text-3xl">¿POR QUE ACQUA PURE?</p>
        </div>
        <div className="w-full pt-5 grid grid-cols-2 md:flex md:justify-center text-base">
          <div className="w-full md:w-1/4">
            <div className="flex justify-center">
              <img src={hoja} alt="Sin plomo" className="w-16 md:w-20"></img>
            </div>
            <div className="flex justify-center">
              <p className="font-parrafo text-plomo font-bold pt-2">
                Libre de Plomo
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="flex justify-center">
              <img src={corazon} alt="Cuida tu Salud" className="w-16 md:w-20"></img>
            </div>
            <div className="flex justify-center">
              <p className="font-parrafo text-plomo font-bold pt-2">
                Cuida tu Salud
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 pt-4 md:pt-0">
            <div className="flex justify-center">
              <img src={sal} alt="Sin plomo" className="w-16 md:w-20"></img>
            </div>
            <div className="flex justify-center">
              <p className="font-parrafo text-plomo font-bold pt-2">
                Sin Sodio
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 pt-4 md:pt-0">
            <div className="flex justify-center">
              <img src={delivery} alt="Delivery" className="w-16 md:w-20"></img>
            </div>
            <div className="flex justify-center">
              <p className="font-parrafo text-plomo font-bold pt-2">
                Delivery
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-12 pb-10 text-center">
          <Link to={'/Nosotros'}><button className="py-4 px-12 bg-celeste hover:bg-celesteosc text-2xl text-white rounded-3xl text-white font-bold font-titulo">
            CONOCENOS
          </button></Link>
        </div>
      </div>
      {/*parte de abajo*/}
      <div className="pt-5 bg-contenedor pb-6">
        <div className="w-full px-8 pt-2 lg:px-32">
          <div className="flex justify-center font-titulo text-3xl font-bold text-celeste">
            KIT INICIAL
          </div>
          <div className="pt-8 md:flex">
            <div className="w-full md:w-1/2">
              <div className="flex justify-center">
                <img src={l20} alt="botellon 20 litros" className="w-24 flex mt-12 "></img>
                <img src={caja20} alt="botellon con dispensador" className="w-24"></img>
              </div>
              <div className="font-parrafo font-bold pt-3">
                <p className="text-center text-plomo text-lg">
                  2 Botellones de 20 LT + Dispensador
                </p>
              </div>
              <div className="pt-3 flex justify-evenly text-white">
                <button className="bg-celeste rounded-lg px-4 py-1 text-white font-bold font-titulo">
                  $ 10.000
                </button>
                <button className="bg-verde hover:hoverver rounded-lg px-4 py-1 text-white font-bold font-titulo">
                  Agregar
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-6 md:pt-0">
              <div className="flex justify-center">
                <img src={l10} alt="botellon 20 litros" className="w-24 flex mt-12 "></img>
                <img src={caja10} alt="botellon con dispensador" className="w-24"></img>
              </div>
              <div className="font-parrafo font-bold pt-3">
                <p className="text-center text-plomo text-lg">
                  2 Botellones de 10 LT + Dispensador
                </p>
              </div>
              <div className="pt-3 flex justify-evenly text-white">
                <button className="bg-celeste rounded-lg px-4 py-1 text-white font-bold font-titulo">
                  $ 8.000
                </button>
                <button className="bg-verde hover:hoverver rounded-lg px-4 py-1 text-white font-bold font-titulo">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
