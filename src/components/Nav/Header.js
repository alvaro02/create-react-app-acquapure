import React from "react";
import aqua_pure from "../../assets/img/aqua_pure.png";
import Burger from "./Burger";
import carro from "../../assets/img/shopping_cart-black-18dp.svg"

const Header = () => {
  return (
    <div>
      <div className="invisible md:visible w-full font-parrafo text-sm px-8 pt-2 lg:px-32">
        <div className="w-1/2 flex justify-start text-sm float-left">
          <btn className="bg-verde hover:bg-hoverver text-white rounded-lg px-2">
            Haga su pedido
          </btn>
          <p className="invisible md:visible md:pl-4">Llámanos ahora: +56 8 2345 6789</p>
        </div>
        <div className="w-1/2 flex justify-end">
          <a className="pr-4 font-bold" href="#">
            Registrate
          </a>
          <btn className="bg-celeste hover:bg-celesteosc text-white rounded-lg px-2">
            Iniciar Sesion
          </btn>
          <img src={carro} className="w-10 pl-4" alt="carro"></img>
        </div>
      </div>
      <div className="invisible md:visible md:pt-2 md:border-b md:border-black"></div>

      {/*parte de abarjo*/}
      <div className="md:h-12 md:bg-celeste font-parrafo text-lg mt-4 px-8 lg:px-32 md:mb-6">
        <div className="w-full">
          <div className="w-full md:w-1/2 flex justify-start md:float-left">
            <img src={aqua_pure} alt="Logo" className="w-48 bg-white -mt-6 md:-mt-2"></img>
          </div>
          
          <div className="invisible md:visible w-1/2 flex justify-end object-center">
            <ul className="flex justify-end mt-3">
              <li className="pl-1 text-white">INICIO</li>
              <li className="pl-1 text-black">│</li>
              <li className="pl-1 text-white">CATALOGO</li>
              <li className="pl-1 text-black">│</li>
              <li className="pl-1 text-white">NOSOTROS</li>
              <li className="pl-1 text-black">│</li>
              <li className="pl-1 text-white">CONTACTO</li>
            </ul>
          </div>
        </div>
      </div>
      <Burger />
    </div>
  );
};

export default Header;
