import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  
  @media (max-width: 767px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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
    <Ul open={open} className="visible md:invisible md:-mb-40 font-titulo">
      <li>INICIO SESION</li>
      <li>INICIO</li>
      <li>CATALOGO</li>
      <li>NOSOTROS</li>
      <li>CONTACTO</li>
      <li>IMAGEN CARRO</li>
    </Ul>
  )
}


export default NavDer;
