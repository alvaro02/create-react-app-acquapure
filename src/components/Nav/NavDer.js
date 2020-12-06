import React from "react";
import styled from "styled-components";
import carrob from "../../assets/img/shopping_cart-white.svg";
import {Link} from 'react-router-dom';


const Ul = styled.ul`
  
  @media (max-width: 767px) {
    flex-flow: column nowrap;
    background-color: #031E47;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    padding-top: 7rem;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: #fff;
    }
  }
`;

const NavDer = ({ open }) => {
  return (
    <Ul open={open} className="visible md:invisible md:-mb-40 font-titulo md:pt-0 text-center font-titulo text-lg">
     <Link to={'/Sesionuser'}> <li className="pt-12 md:pt-0">INICIO SESION</li> </Link>
     <Link to={'/'}><li className="py-5 md:py-0">INICIO</li></Link>
     <Link to={'/Catalogo'}><li className="">CATALOGO</li></Link>
     <Link to={'/Nosotros'}><li className="py-5 md:py-0">NOSOTROS</li></Link>
     <Link to={'/Contacto'}><li className="">CONTACTO</li></Link>
     <Link to={'/Carrito'}><li className="flex justify-center pt-5 md:pt-0"><img src={carrob} className="w-16" alt="carro"></img></li></Link>
    </Ul>
  )
}


export default NavDer;
