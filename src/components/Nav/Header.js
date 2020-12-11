import React from "react";
import aqua_pure from "../../assets/img/aqua_pure.png";
import Burger from "./Burger";
import carro from "../../assets/img/shopping_cart.svg";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="invisible md:visible w-0 md:w-full font-parrafo text-sm px-8 pt-2 lg:px-32">
        <div className="w-1/2 flex justify-start text-sm float-left">
          <Link to={'/Catalogo'}><button className="bg-verde hover:bg-hoverver text-white rounded-lg px-2">
            Haga su pedido
          </button></Link>
          <p className="invisible md:visible md:pl-4">Llámanos ahora: +56 8 2345 6789</p>
        </div>
        <div className="w-1/2 flex justify-end">
        <Link to={'/Registrate'}><a className="pr-4 font-bold" href="www.google.cl">
            Registrate
          </a></Link>
          <Link to={'/Sesionuser'}><button className="bg-celeste hover:bg-celesteosc text-white rounded-lg px-2">
            Iniciar Sesion
          </button></Link>
          <Link to={'/Carrito'}><img src={carro} className="w-10 pl-4" alt="carro"></img></Link>
        </div>
      </div>
      <div className="invisible md:visible md:pt-2 md:border-b md:border-black"></div>

      {/*parte de abarjo*/}
      <div className="md:h-12 md:bg-celeste font-parrafo text-lg mt-4 px-8 lg:px-32 md:mb-6">
        <div className="w-full">
          <div className="w-full md:w-1/2 flex justify-start md:float-left">
            <Link to={'/'}><img src={aqua_pure} alt="Logo" className="w-48 bg-white -mt-6 md:-mt-2 px-0 md:px-3"></img></Link>
          </div>
          
          <div className="invisible md:visible w-0 md:w-1/2 flex justify-end object-center">
            <ul className="flex justify-end mt-3">
            <Link to={'/'}><li className="pl-1 text-white hover:bg-gray-600">INICIO</li></Link>
              <li className="pl-1 text-black">│</li>
              <Link to={'/Catalogo'}><li className="pl-1 text-white hover:bg-gray-600">CATALOGO</li></Link>
              <li className="pl-1 text-black">│</li>
              <Link to={'/Nosotros'}><li className="pl-1 text-white hover:bg-gray-600">NOSOTROS</li></Link>
              <li className="pl-1 text-black">│</li>
              <Link to={'/Contacto'}> <li className="pl-1 text-white hover:bg-gray-600">CONTACTO</li></Link>
            </ul>
          </div>
          <Burger />
        </div>
      </div>
     
    </div>
  );
};

export default Header;
